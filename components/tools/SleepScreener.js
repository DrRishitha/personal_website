"use client";

import Screener from './Screener';
import { isiByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function SleepScreener() {
    const { t, lang } = useLanguage();
    const data = isiByLang[lang] || isiByLang.en;

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
        />
    );
}
