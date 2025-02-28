import {getProjectById, getProjects} from '@/lib/projects';
import {Calendar, MapPin} from 'lucide-react';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import {Header} from '@/components/Header'
import styles from '@/app/page.module.css'
import projectStyles from './projectPage.module.css';
import {ImageCarousel} from '@/components/ImageCarousel/ImageCarousel';

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({params}: { params: { id: string } }) {
    const project = await getProjectById(decodeURIComponent(params.id));

    if (!project) {
        notFound();
    }

    const projectVideos = project.media.videos
    const projectImages = project.media.images

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
                <div className={projectStyles.pageHeader}>
                    <h2>{project.title}</h2>
                    <hr className={projectStyles.line}/>
                </div>
                <div className={projectStyles.pageContainer}>
                    <div className={projectStyles.imageContainer}>
                        <Image
                            src={project.cover_image}
                            alt={project.title}
                            width={990}
                            height={500}
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                    <div className={projectStyles.infoContainer}>
                        <div className={projectStyles.dateLocationContainer}>
                            <div className={projectStyles.iconContainer}>
                                <Calendar className="w-5 h-5"/>
                                <span>{project.date}</span>
                            </div>
                            <div className={projectStyles.iconContainer}>
                                <MapPin className="w-5 h-5"/>
                                <span>{project.location}</span>
                            </div>
                        </div>

                        <div className={projectStyles.descriptionContainer}>
                            <div
                                className={projectStyles.descriptionContainer}
                                dangerouslySetInnerHTML={{ __html: project.description_full }}
                            />
                        </div>

                        {(projectVideos && projectVideos.length > 0) && (
                            <div className={projectStyles.videoContainer}>
                                {project.media.videos.map((video, index) => (
                                    <video width="942px" controls key={`${video}-index`} className={projectStyles.video}>
                                        <source src={`/video/${video}`} type="video/mp4"/>
                                    </video>
                                ))}
                            </div>
                        )}

                        {(projectImages && projectImages.length > 0) && (
                            <div className={projectStyles.imageCarouselContainer}>
                                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                                    <ImageCarousel images={projectImages}/>
                                </div>
                            </div>
                        )}

                        {(project.quotes.length > 0) && (
                            <div className={projectStyles.quotesContainer}>
                                {project.quotes.map((quote, index) => (
                                    <div key={`${quote.name}-${index}`}>
                                        <div className={projectStyles.quoteHeader}>
                                            <hr className={projectStyles.line}/>
                                        </div>
                                        <div key={index} className={projectStyles.quote}>
                                            <p><i>{quote.quote}</i></p>
                                            <p className={projectStyles.quoteName}>{quote.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {(project.external_links.length > 0) && (
                            <div>
                                <div className={projectStyles.linksTitle}>See more:</div>
                                <div className={projectStyles.linksContainer}>
                                    {project.external_links.map((link, index) => (
                                        <div key={`${link.title}-${index}`} className={projectStyles.link}>
                                            <a href={link.url} target="_blank">{link.title}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}