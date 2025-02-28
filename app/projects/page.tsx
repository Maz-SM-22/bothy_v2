import {getProjects} from '@/lib/projects';
import Link from 'next/link';
import {Calendar, MapPin} from 'lucide-react';
import Head from "next/head";
import {Header} from "@/components/Header";
import styles from "@/app/page.module.css";
import projectStyles from './projectsPage.module.css'
import Image from 'next/image'

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            <Head>
                <meta property="og:title" content="Bothy Manchester" key="title"/>
                <link rel="icon" href="/logo/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png"/>
            </Head>
            <Header/>
            <main className={styles.main}>
                <div className={projectStyles.projectWrapper}>
                    <div className={projectStyles.projectHeader}>
                        <h2 className={projectStyles.heading}>Projects</h2>
                        <hr className={projectStyles.underline}/>
                    </div>

                    <div className={projectStyles.projectsContainer}>
                        {projects.map((project) => (
                            <div key={project.id} className={projectStyles.projectCard}>
                                <Link
                                    key={project.id}
                                    href={`/projects/${encodeURIComponent(project.id)}`}
                                >
                                    <div className={projectStyles.flexDiv}>
                                        <div className={projectStyles.textContainer}>
                                            <h3 className={projectStyles.h3}>{project.title}</h3>
                                            <div className={projectStyles.iconsContainer}>
                                                <div className={projectStyles.iconContainer}>
                                                    <Calendar className="w-4 h-4"/>
                                                    <span>{project.date}</span>
                                                </div>
                                                <div className={projectStyles.iconContainer}>
                                                    <MapPin className="w-4 h-4"/>
                                                    <span>{project.location}</span>
                                                </div>
                                            </div>
                                            <div className={projectStyles.description}>{project.description_short}</div>
                                        </div>
                                        <div className={projectStyles.seeMoreButton}>See more</div>
                                    </div>
                                    <Image
                                        src={project.cover_image}
                                        height={300}
                                        width={300}
                                        alt={project.title}
                                        className={projectStyles.image}
                                        style={{objectFit: 'cover'}}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

