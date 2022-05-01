// import styles from './TimeLine.css'

import { Chrono } from "react-chrono";

export default function TimeLineExperience() {
    const items = [{
        title: "07-05-2020 | Actualmente",
        cardTitle: "Suplos",
        url: "https://www.suplos.com",
        cardSubtitle: "Ingeniero de soporte y desarrollo",
        cardDetailedText: "Creando aplicaciones B2B y realizandole integraciones y mejoras a los apps existentes.",
    }, {
        title: "07-01-2017 | 07-05-2020",
        cardTitle: "Full Stack Developer",
        url: "linkeding",
        cardSubtitle: "Creación de aplicaciones web para distintos clientes...",
        cardDetailedText: "Creación de aplicaciones web para distintos clientes...",
    }];

    return <>
        <section>
            <div>
                <Chrono
                    items={items}
                    hideControls={true}
                    slideShow
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        secondary: "#e3e3e3",
                        primary: "black",
                        titleColor : "black"
                      }}
                />
            </div>
        </section>
    </>;
}
