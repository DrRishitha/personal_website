"use client";

import Screener from './Screener';
import { pss10ByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useAudioManifest } from '@/hooks/useAudioManifest';

export default function StressScreener() {
    const { t, lang } = useLanguage();
    const manifest = useAudioManifest();
    const data = pss10ByLang[lang] || pss10ByLang.en;

    const toolAudio = manifest?.screeners?.pss10?.[lang] ?? {};
    const questionAudio = data.questions.map((_, i) => toolAudio[`q${i}`] ?? null);

    const getResult = (score) => {
        for (const level of data.interpretation) {
            if (score <= level.max) return level;
        }
        return data.interpretation[data.interpretation.length - 1];
    };

    return (
        <Screener
            title={t('screener.stressTitle')}
            questions={data.questions}
            options={data.options}
            reverseScored={data.reverseScored}
            hint={t('screener.stressHint')}
            getResult={getResult}
            questionAudio={questionAudio}
        />
    );
}
