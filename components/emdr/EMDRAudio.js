"use client";

import { useRef, useCallback, useEffect } from 'react';

export function useEMDRAudio(volume = 0.3, frequency = 480) {
    const audioCtxRef = useRef(null);
    const isInitialized = useRef(false);

    const init = useCallback(() => {
        if (isInitialized.current) return;
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        isInitialized.current = true;
    }, []);

    const playBeep = useCallback((pan = 0) => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') ctx.resume();

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const panner = ctx.createStereoPanner();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        panner.pan.value = pan; // -1 left, 1 right
        gainNode.gain.value = volume;

        oscillator.connect(panner);
        panner.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Fade in and out to avoid clicks
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.02);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.15);
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
