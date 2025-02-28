import styles from '@/app/page.module.css'
import Navigation from "@/components/Navigation/Navigation";
import Link from 'next/link';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <div className={styles.logo} />
            </Link>
            <Navigation/>
        </header>
    )
}