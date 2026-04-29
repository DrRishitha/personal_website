"use client";

import Screener from './Screener';
import { cageByLang } from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function AddictionScreener() {
    const { t, lang } = useLanguage();
    const data = cageByLang[lang] || cageByLang.en;

    const getResult = (score) => {
        for (const level of data.interpretation) {
            if (score <= level.max) return level;
        }
        return data.interpretation[data.interpretation.length - 1];
    };

    return (
        <Screener
            title={t('screener.addictionTitle')}
            questions={data.questions}
            options={data.options}
            getResult={getResult}
        />
    );
}
