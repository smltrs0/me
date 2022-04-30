export default function Projects({styles}){
    return <>
        <hr className={styles.hr} />
        <section>
                <h2 className={styles.center} title="Proyectos mas relevantes">Projectos</h2>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <div className={styles.projectImage}>
                            <img src="https://img.icons8.com/dusk/344/book.png" alt="book"/>
                        </div>
                        <div className={styles.projectDescription}>
                            <h3>Alphalibros</h3>
                            <p>Sistema administrador de libros open source desarrollado en PHP y POO, el cual posee un sistema de inventario para la administración de libros.</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImage}>
                            <img src="https://img.icons8.com/dusk/344/tooth.png" alt="tooth"/>
                        </div>
                        <div className={styles.projectDescription}>
                            <h3>Odontosistem</h3>
                            <p>Sistema de control de citas medicas y administracion de pacientes desarrollado en laravel y vuejs.</p>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImage}>
                            <img src="https://img.icons8.com/dusk/344/github.png" alt="github"/>
                        </div>
                        <div className={styles.projectDescription}>
                            <h3>Github</h3>
                            <a href="https://github.com/smltrs0">Ver mas...</a>
                        </div>
                    </div>
                </div>
            </section>
    </>
}
