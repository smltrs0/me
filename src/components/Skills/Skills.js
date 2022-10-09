import React from "react";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import { skillsList } from "../../data";

const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {skillsList.map((elem, k) => (
                <Paper key={k} className={classes.paper} elevation={10}>
                    {elem.resource ? (
                        <img className={classes.img} src={elem.resource} alt={elem.title} title={elem.title} />
                    ) : (
                        <Typography variant="h6">{elem.title}</Typography>
                    )}
                </Paper>
            ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "800px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    skillWrapper: {
        width: "100%",
    },
    skillTitle: {
        whiteSpace: "nowrap",
        marginRight: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "110px",
        height: "110px",
        borderRadius: "50%"
    },
    img: {
        width: "60px",
        height: "60px",
        objectFit: "contain",
    },
}));

export default Skills;
