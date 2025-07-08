import { BugButton } from 'app/providers/ErrorBoundry';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('main_page')}
        </div>
    );
};

export default MainPage;
