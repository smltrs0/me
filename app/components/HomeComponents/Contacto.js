export default function Contacto({styles}){
    return <>
        <hr className={styles.hr}/>
        <section className={styles.contacto}>
            <form>
            <h2>Contactame</h2>
                <label className={styles.textfield}>
                    <span className={styles.sronly}>Tu correo</span>
                    <input type="email" placeholder="Tu correo"/>
                </label>
                <label className={styles.textfield}>
                    <span className={styles.sronly}>Nombre</span>
                    <input type="text" placeholder="Nombre"/>
                </label>
                <label className={styles.textfield}>
                    <span className={styles.sronly}>Comentario</span>
                        <textarea placeholder="Comentario"></textarea>
                </label>
                <label className={styles.textfield}>
                   <button>Contactarme</button>
                </label>
            </form>
        </section>
    </>
}
