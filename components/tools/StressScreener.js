"use client";

import Screener from './Screener';
import { pss10ByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function StressScreener() {
    const { t, lang } = useLanguage();
    const data = pss10ByLang[lang] || pss10ByLang.en;

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
        />
    );
}
