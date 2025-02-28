import Head from 'next/head'
import styles from './page.module.css'
import LandingPage from './landing/landing'
import { Header } from '@/components/Header'

export default function Home() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Bothy Manchester" key="title"/>
                <link rel="icon" href="/logo/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png"/>
            </Head>
            <Header />
            <main className={styles.main}>
                <LandingPage/>
            </main>
        </>
    );
}
