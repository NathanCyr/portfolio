import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher';

export default function Header(){

    const {t, i18n} = useTranslation('common');

    if(i18n.isInitialized === false){
        return null;
    }
    return (
        <header>
            <div>
                <Link href="/">
                    <h2>
                        {t('home_title')}
                    </h2>
                </Link>

                <LanguageSwitcher />
            </div>
        </header>
    );
}