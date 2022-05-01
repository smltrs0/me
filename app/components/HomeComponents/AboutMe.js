export default function AboutMe({styles}) {
    return <>
        {/* <hr className={styles.hr} /> */}
        <seccion>
            <h2 className={styles.center}>Acerca de mi</h2>
            <div className={styles.aboutMe}>
                <div className={styles.AboutMeDescripcion}>
                    <p>Construyó aplicaciones web 2B2, aplicativos CRM e integraciones con distintos servicios, gracias estos los desarrollos realizados he obtenido un nivel de conocimiento y habilidades de trabajo y cooperación en equipo y la implementación en scrum como metodología de trabajo.</p>
                    <p>Algún logro destacado ha sido Desarrollar Modificar y darle soporte a cerca de 19 módulos con distintos clientes adaptándolos a sus requerimientos y necesidades.</p>
                </div>
                <div className={styles.photoSection}>
                    <img className={styles.photo} src="https://media-exp1.licdn.com/dms/image/C4E03AQHbT-MVByAy8g/profile-displayphoto-shrink_200_200/0/1604512792378?e=1656547200&v=beta&t=yCOZ1rj2CL8Ltp__PzFOI9cOuLTqurrzRRyMiWklGA4" alt="" />
                </div>
            </div>
        </seccion>
    </>
}
