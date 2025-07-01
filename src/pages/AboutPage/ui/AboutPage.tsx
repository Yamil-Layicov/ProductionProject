import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('main_page')}
        </div>
    );
};

export default AboutPage;
