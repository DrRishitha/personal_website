"use client";

import { useRef, useCallback, useEffect } from 'react';

export function useEMDRAudio(volume = 0.3, frequency = 440) {
    const audioCtxRef = useRef(null);
    const isInitialized = useRef(false);

    const init = useCallback(() => {
        if (isInitialized.current) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        audioCtxRef.current = ctx;
        isInitialized.current = true;
        // Some browsers start AudioContext suspended even after a user gesture
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    }, []);

    const playBeep = useCallback((pan = 0) => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;

        const scheduleBeep = () => {
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const panner = ctx.createStereoPanner();

            osc.type = 'sine';
            osc.frequency.value = frequency;

            osc.connect(gain);
            gain.connect(panner);
            panner.connect(ctx.destination);

            panner.pan.value = pan;

            // Bell-like envelope: instant attack, slow exponential decay
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(volume, now + 0.008);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

            osc.start(now);
            osc.stop(now + 0.45);
        };

        if (ctx.state === 'suspended') {
            ctx.resume().then(scheduleBeep).catch(() => {});
        } else {
            scheduleBeep();
        }
    }, [volume, frequency]);

    useEffect(() => {
        return () => {
            if (audioCtxRef.current) {
                audioCtxRef.current.close();
                isInitialized.current = false;
            }
        };
    }, []);

    return { init, playBeep };
}
