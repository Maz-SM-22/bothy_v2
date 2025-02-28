"use client";
import styles from './landing.module.css'
import { useRouter } from 'next/navigation'
import { MessageForm } from '@/components/MessageForm/MessageForm'

export default function LandingPage() {
    const router = useRouter()

    const goToProjects = () => {
        router.push('/projects')
    }

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <button className={styles.eventsButton} onClick={goToProjects}>
                    <a href="/projects">See all projects!</a>
                </button>
            </section>
            <section className={styles.section}>
                <video width="932px" height="850px" controls loop autoPlay className={styles.video}>
                    <source src="/video/bothy_musicians_video.mp4" type="video/mp4"/>
                </video>
            </section>
            <section className={styles.section}>
                <h1 className={styles.header}>Who are we?</h1>
                <p>
                    Bothy is a small, Manchester-based organisation that seeks to create space for classical and art
                    music played primarily on acoustic instruments.
                </p>
            </section>
            <section className={styles.section}>
                <h1 className={styles.header}>We make space by:</h1>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <div className={styles.headingBar}>
                            <hr className={styles.line} />
                        </div>
                        <p>Helping artists hosts gigs, concert series and workshops</p>
                    </li>
                    <li className={styles.li}>
                        <div className={styles.headingBar}>
                            <hr className={styles.line}/>
                        </div>
                        <p>Facilitating access to free and accessible rehearsal spaces</p>
                    </li>
                    <li className={styles.li}>
                        <div className={styles.headingBar}>
                            <hr className={styles.line}/>
                        </div>
                        <p>Curating line-ups as part of larger festivals</p>
                    </li>
                </ul>
            </section>
            <section className={styles.section}>
                <h1 className={styles.header}>Want to get involved?</h1>
                <p>If you have space to offer artists, if you are an artist struggling to pursue your craft sustainably,
                    or if you are a chamber group looking to shake up the places and audiences you perform for, we would
                    love to hear from you!</p>
            </section>
            <section className={styles.section}>
                <h1 className={styles.header}>Get in touch</h1>
                <p>Slip into our inbox or reach out to us via social media</p>
                <MessageForm />
            </section>
            <section className={styles.section}>
                <a href="https://www.instagram.com/bothymcr/" className={styles.instagramLink} target="_blank">
                    <div className={styles.flexDiv}>
                        <div className={styles.iconContainer}>
                            <div className={styles.instagramIcon}>
                                <div className={styles.cameraLens}></div>
                                <div className={styles.cameraDot}></div>
                            </div>
                        </div>
                        <p>@bothymcr</p>
                    </div>
                </a>
        </section>
</main>
)
}