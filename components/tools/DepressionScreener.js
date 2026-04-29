"use client";

import Screener from './Screener';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function DepressionScreener() {
    const { t } = useLanguage();

    const questions = [
        t('screener.depQ1'), t('screener.depQ2'), t('screener.depQ3'),
        t('screener.depQ4'), t('screener.depQ5'), t('screener.depQ6'),
        t('screener.depQ7'), t('screener.depQ8'), t('screener.depQ9'),
    ];

    const options = [
        { label: t('screener.optNotAtAll'), value: 0 },
        { label: t('screener.optSeveralDays'), value: 1 },
        { label: t('screener.optMoreThanHalf'), value: 2 },
        { label: t('screener.optNearlyEvery'), value: 3 },
    ];

    const getResult = (score) => {
        if (score <= 4) return { level: t('screener.depMinimal'), color: 'hsl(150, 55%, 45%)', description: t('screener.depMinimalDesc') };
        if (score <= 9) return { level: t('screener.depMild'), color: 'hsl(50, 85%, 50%)', description: t('screener.depMildDesc') };
        if (score <= 14) return { level: t('screener.depModerate'), color: 'hsl(25, 90%, 55%)', description: t('screener.depModerateDesc') };
        if (score <= 19) return { level: t('screener.depModSevere'), color: 'hsl(5, 75%, 55%)', description: t('screener.depModSevereDesc') };
        return { level: t('screener.depSevere'), color: 'hsl(0, 72%, 50%)', description: t('screener.depSevereDesc') };
    };

    return (
        <Screener
            title={t('screener.depressionTitle')}
            questions={questions}
            options={options}
            hint={t('screener.depressionHint')}
            getResult={getResult}
        />
    );
}
