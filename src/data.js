import Alphalibros_1 from "./assets/images/Alfalibros_1.jpg"
import Alphalibros_2 from "./assets/images/Alfalibros_2.jpg"

import Odontosistem_1 from "./assets/images/Odontosistem_1.jpg"
import Odontosistem_2 from "./assets/images/Odontosistem_2.jpg"

const skillsList = [
    {
        title: "React JS",
        value: 75,
        resource: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    },
    {
        title: "Next js",
        value: 80,
        resource: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
    },
    {
        title: "Material UI",
        value: 80,
        resource: "https://material-ui.com/static/logo.png",
    },
    {
        title: "Styled components",
        value: 80,
        resource: "https://styled-components.com/logo.png",
    },
    {
        title: "Vue JS",
        value: 80,
        resource: "https://vuejs.org/images/logo.png"
    },
    {
        title: "Node JS ",
        value: 60,
        resource: "https://nodejs.org/static/images/logo.svg"
    },
    {
        title: "Express framework",
        value: 70,
        resource : "https://expressjs.com/images/express-facebook-share.png"
    },
    {
        title: "PHP",
        value: 70,
        resource : "https://cdn-icons-png.flaticon.com/512/528/528261.png"
    },
    {
        title: "Laravel",
        value: 70,
        resource : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
    },
    {
        title: "Lumen",
        value: 70,
    },
    {
        title: "Java Script",
        value: 70,
        resource: "https://cdn-icons-png.flaticon.com/512/840/840129.png"
    },
];
const projectList = [
    {
        id: 1,
        title: "Alphalibros",
        technologies: ["PHP", "Javascript", "MySql 4"],
        backgroundImage: Alphalibros_1,
        frontImage: Alphalibros_2,
    },
    {
        id: 2,
        title: "Odontosistem",
        technologies: ["Laravel", "Vue JS", "MySql", "Bootstrap 5"],
        backgroundImage: Odontosistem_2,
        frontImage: Odontosistem_1,
    },
    {
        id: 3,
        title: "GitHub",
        technologies: ["React JS", "Node JS", "Mysql", "Vue JS"],
        backgroundImage:
            "https://miro.medium.com/max/720/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg",
        frontImage: "https://miro.medium.com/max/720/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg",
        link : "https://github.com/smltrs0"
    },
];

const experienceList = [
    {
        id: 0,
        company: "Suplos Sas",
        links: {
            website: "https://cliente.suplos.com/",
            facebook: "https://www.facebook.com/SuplosLatam",
            instagram: "https://www.instagram.com/suploslatam",
        },
        dates: {
            start: "2020/10/05",
            end: "2022/08/10",
        }
    },
    {
        id: 1,
        company: "Suplos Sas",
        links: {
            website: "https://cliente.suplos.com/",
            facebook: "https://www.facebook.com/SuplosLatam",
            instagram: "https://www.instagram.com/suploslatam",
        },
        dates: {
            start: "2022/08/10",
            end : new Date(),
        }
    },
];

export { skillsList, projectList, experienceList };
