import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typing from "react-writing-effect";
import AboutMe from './HomeComponents/AboutMe';
import Services from './HomeComponents/Services';
import ButtonDarkMode from './HomeComponents/ButtonDarkMode';
import TimeLineExperience from './HomeComponents/TimeLine/TimeLineExperience';
import { Projects } from './HomeComponents/Proyects';
import Contacto from "./HomeComponents/Contacto";
import CountSetInterval from './HomeComponents/Counter/CountMethods';

export default function Home() {
    const [writing, setWriting] = useState(false);
    const [darKMode, setDarkMode] = useState(false);

    const togglerDarkMode = () => setDarkMode(!darKMode);
    return (
        <div className={darKMode ? styles.containerDark : styles.container}>
            <Head>
                <title>Samuel Trias</title>
                <link rel="icon" href={"/favicon.ico"} />
            </Head>
            <header className={darKMode ? styles.headerDark : styles.header}>
                {
                    ['Inicio', 'Acerca de mi', 'Habilidades', 'Projectos', 'Contacto', 'Blog'].map((itemHeader, index) => {
                        return <a href='#' className={darKMode ? styles.itemHeaderDark : styles.itemHeaderWhite} key={index}>{itemHeader}</a>
                    })
                }
                <ButtonDarkMode className={styles.itemHeaderWhite} darkMode={darKMode} setDarkMode={togglerDarkMode} styles={styles} />
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <Typing
                        cursor={writing}
                        onFinish={() => setWriting(!writing)}
                    >
                        Hola soy Samuel
                    </Typing>
                </h1>
                <p className={styles.description}>
                    {(writing)?<Typing> Desarrollador de software para humanos </Typing> : ''}
                </p>
            </main>
            <div className={styles.countSection}>
                <div className={styles.counter}>
                    <img src="https://img.icons8.com/ios/48/coffee--v1.png" alt="coffe" />
                    <CountSetInterval
                        label={"count"}
                        number={12648}
                        duration={3}
                    />
                   <p>Tasas de cafe</p>
               </div>
                <div className={styles.counter}>
                    <img src="https://img.icons8.com/material-outlined/48/code.png" alt="code" />
                    <CountSetInterval
                        label={"count"}
                        number={800000}
                        duration={3}
                    />
                   <p>Líneas de código escrito</p>
               </div>
                <div className={styles.counter}>
                    <img src="https://img.icons8.com/ios/48/project.png" alt="proyectos" />
                    <CountSetInterval
                        label={"count"}
                        number={24}
                        duration={3}
                    />
                   <p>Proyectos realizados</p>
               </div>
            </div>
            <AboutMe styles={styles}/>
            <Services styles={styles}/>
            <hr className={styles.hr}/>
            <div className={styles.experince}>
                <h2 className={styles.center}>Experiencias</h2>
                <TimeLineExperience/>
            </div>
            <Projects styles={styles}/>
            <Contacto styles={styles}/>
            <footer className={styles.footer}>
                All rights reserved
            </footer>
        </div>
    )
}
