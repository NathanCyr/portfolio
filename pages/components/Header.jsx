import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['translation'])),
      },
    };
  }

export default function Header(){

    const {t} = useTranslation('translation');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Avoid rendering until client-side is ready
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