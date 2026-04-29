"use client";

import Screener from './Screener';
import { pcPtsd5ByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function PTSDScreener() {
    const { t, lang } = useLanguage();
    const data = pcPtsd5ByLang[lang] || pcPtsd5ByLang.en;

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
            negativeResult={{
                level: t('screener.negativeScreen'),
                color: 'hsl(150, 55%, 45%)',
                description: t('screener.negativeScreenDesc'),
            }}
        />
    );
}
