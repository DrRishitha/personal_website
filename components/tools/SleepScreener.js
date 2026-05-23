"use client";

import Screener from './Screener';
import { isiByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useAudioManifest } from '@/hooks/useAudioManifest';

export default function SleepScreener() {
    const { t, lang } = useLanguage();
    const manifest = useAudioManifest();
    const data = isiByLang[lang] || isiByLang.en;

    const toolAudio = manifest?.screeners?.isi?.[lang] ?? {};
    const questionAudio = data.questions.map((_, i) => toolAudio[`q${i}`] ?? null);

    const getResult = (score) => {
        for (const level of data.interpretation) {
            if (score <= level.max) return level;
        }
        return data.interpretation[data.interpretation.length - 1];
    };

    return (
        <Screener
            title={t('screener.sleepTitle')}
            questions={data.questions}
            options={data.options}
            hint={t('screener.sleepHint')}
            getResult={getResult}
            questionAudio={questionAudio}
        />
    );
}
