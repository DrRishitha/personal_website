"use client";

import Screener from './Screener';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function AnxietyScreener() {
    const { t } = useLanguage();

    const questions = [
        t('screener.anxQ1'), t('screener.anxQ2'), t('screener.anxQ3'),
        t('screener.anxQ4'), t('screener.anxQ5'), t('screener.anxQ6'),
        t('screener.anxQ7'),
    ];

    const options = [
        { label: t('screener.optNotAtAll'), value: 0 },
        { label: t('screener.optSeveralDays'), value: 1 },
        { label: t('screener.optMoreThanHalf'), value: 2 },
        { label: t('screener.optNearlyEvery'), value: 3 },
    ];

    const getResult = (score) => {
        if (score <= 4) return { level: t('screener.anxMinimal'), color: 'hsl(150, 55%, 45%)', description: t('screener.anxMinimalDesc') };
        if (score <= 9) return { level: t('screener.anxMild'), color: 'hsl(50, 85%, 50%)', description: t('screener.anxMildDesc') };
        if (score <= 14) return { level: t('screener.anxModerate'), color: 'hsl(25, 90%, 55%)', description: t('screener.anxModerateDesc') };
        return { level: t('screener.anxSevere'), color: 'hsl(0, 72%, 50%)', description: t('screener.anxSevereDesc') };
    };

    return (
        <Screener
            title={t('screener.anxietyTitle')}
            questions={questions}
            options={options}
            hint={t('screener.anxietyHint')}
            getResult={getResult}
        />
    );
}
