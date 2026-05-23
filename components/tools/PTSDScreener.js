"use client";

import Screener from './Screener';
import { pcPtsd5ByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useAudioManifest } from '@/hooks/useAudioManifest';

export default function PTSDScreener() {
    const { t, lang } = useLanguage();
    const manifest = useAudioManifest();
    const data = pcPtsd5ByLang[lang] || pcPtsd5ByLang.en;

    const toolAudio = manifest?.screeners?.pcptsd5?.[lang] ?? {};
    const questionAudio = data.questions.map((_, i) => toolAudio[`q${i}`] ?? null);
    const preambleAudio = toolAudio.preamble ?? null;

    const getResult = (score) => {
        for (const level of data.interpretation) {
            if (score <= level.max) return level;
        }
        return data.interpretation[data.interpretation.length - 1];
    };

    return (
        <Screener
            title={t('screener.ptsdTitle')}
            questions={data.questions}
            options={data.options}
            hint={t('screener.ptsdHint')}
            getResult={getResult}
            preamble={{ prompt: data.preamble }}
            preambleAudio={preambleAudio}
            negativeResult={{
                level: t('screener.negativeScreen'),
                color: 'hsl(150, 55%, 45%)',
                description: t('screener.negativeScreenDesc'),
            }}
            questionAudio={questionAudio}
        />
    );
}
