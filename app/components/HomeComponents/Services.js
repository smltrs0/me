export default function Services({styles}){
    return <>
        <hr className={styles.hr}/>
        <h2>Habilidades</h2>
        <section>
                <h3 className={styles.center}>Lenguajes</h3>
                <div className={styles.services}>
                    <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                            <img src="https://img.icons8.com/color/48/000000/html-5.png" alt=""/>
                        </div>
                        <div className={styles.serviceDescription}>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                            <img src="https://img.icons8.com/color/48/000000/css3.png" alt=""/>
                        </div>
                        <div className={styles.serviceDescription}>
                            <h3>CSS3</h3>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                            <img src="https://img.icons8.com/color/48/000000/javascript.png" alt=""/>
                        </div>
                        <div className={styles.serviceDescription}>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceDescription}>
                            <div className={styles.serviceIcon}>
                                <img src="https://img.icons8.com/ios-filled/48/php-logo.png" alt="" />
                            </div>
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>
        </section>
        <section>
            <h3 className={styles.center}>Tecnologías</h3>
            <div className={styles.services}>
                <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                        <img src="https://img.icons8.com/windows/48/vuejs.png" alt=""/>
                    </div>
                    <div className={styles.serviceDescription}>
                        <h3>Vuejs</h3>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                        <img src="https://img.icons8.com/ios-filled/48/react-native.png" alt=""/>
                    </div>
                    <div className={styles.serviceDescription}>
                        <h3>React</h3>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                        <img src="https://img.icons8.com/ios-filled/48/laravel.png" alt=""/>
                    </div>
                    <div className={styles.serviceDescription}>
                        <h3>Laravel</h3>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                        <img src="https://img.icons8.com/material-outlined/48/next.png" alt=""/>
                    </div>
                    <div className={styles.serviceDescription}>
                        <h3>Next.js</h3>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                        <img src="https://img.icons8.com/color/48/bootstrap.png" alt=""/>
                    </div>
                    <div className={styles.serviceDescription}>
                        <h3>Bootstrap</h3>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                        <img src="https://img.icons8.com/color/48/material-ui.png" alt=""/>
                    </div>
                    <div className={styles.serviceDescription}>
                        <h3>Material Ui</h3>
                    </div>
                </div>
            </div>
        </section>
        </>
}
