import Link from "next/link";
import LanguageSwitcher from './LanguageSwitcher';

export default function Header(){
    return (
        <header>
            <div>
                <Link href="/">
                    <h2>
                        Change language
                    </h2>
                </Link>

                <LanguageSwitcher />
            </div>
        </header>
    );
}