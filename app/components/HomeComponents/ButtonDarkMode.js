
export default function ButtonDarkMode({styles, darkMode, setDarkMode}){
    return <>
        <div className={styles.buttonDarkMode} onClick={()=>{ setDarkMode(!darkMode) }}>
            {darkMode ? 
                <img src="https://img.icons8.com/color/48/000000/sun.png" alt="Sun"/>
                :
                <img src="https://img.icons8.com/color/48/000000/moon.png" alt="Moon"/>
            }
        </div>
    </>
}

