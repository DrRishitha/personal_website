"use client";

import { dotDirectionsByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './EMDRControls.module.css';

export default function EMDRControls({ speed, setSpeed, direction, setDirection, volume, setVolume, isPlaying, onTogglePlay, audioEnabled, setAudioEnabled }) {
    const { t, lang } = useLanguage();
    const dotDirections = dotDirectionsByLang[lang] || dotDirectionsByLang.en;

    return (
        <div className={styles.controls}>
            <div className={styles.row}>
                <div className={styles.control}>
                    <label className={styles.label}>{t('emdrControls.speed')}</label>
                    <div className={styles.sliderRow}>
                        <span className={styles.sliderLabel}>{t('emdrControls.slow')}</span>
                        <input
                            type="range"
                            min="0.3"
                            max="3"
                            step="0.1"
                            value={speed}
                            onChange={(e) => setSpeed(parseFloat(e.target.value))}
                            className={styles.slider}
                        />
                        <span className={styles.sliderLabel}>{t('emdrControls.fast')}</span>
                    </div>
                </div>

                <div className={styles.control}>
                    <label className={styles.label}>{t('emdrControls.direction')}</label>
                    <div className={styles.directionBtns}>
                        {dotDirections.map(d => (
                            <button
                                key={d.id}
                                className={`${styles.dirBtn} ${direction === d.id ? styles.dirActive : ''}`}
                                onClick={() => setDirection(d.id)}
                            >
                                {d.icon} {d.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.control}>
                    <label className={styles.label}>{t('emdrControls.audio')}</label>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <button
                            className={`${styles.dirBtn} ${audioEnabled ? styles.dirActive : ''}`}
                            onClick={() => setAudioEnabled(!audioEnabled)}
                        >
                            {audioEnabled ? t('emdrControls.audioOn') : t('emdrControls.audioOff')}
                        </button>
                        {audioEnabled && (
                            <input
                                type="range"
                                min="0.1"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className={styles.slider}
                                style={{ width: '100px' }}
                            />
                        )}
                    </div>
                </div>

                <button
                    className={`btn ${isPlaying ? 'btn-outline' : 'btn-primary'}`}
                    onClick={onTogglePlay}
                    style={{ alignSelf: 'flex-end' }}
                >
                    {isPlaying ? t('emdrControls.pause') : t('emdrControls.resume')}
                </button>
            </div>
        </div>
    );
}
