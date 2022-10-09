import { makeStyles } from "@material-ui/core";

const Logo = (props) => {

    const classes = useStyles();

    return (<div className={classes.logo}>
        |
    </div>);
};

const useStyles = makeStyles((theme) => ({
    logo: {
        animation: `$blinkingText 3s infinite`,
    },
    "@keyframes blinkingText": {
        "0%": { color: theme.palette.primary.main },
        "49%": { color: theme.palette.primary.main },
        "60%": { color: '#ff404000' },
        "99%": { color: '#ff404000' },
        "100%": { color: theme.palette.primary.main },
    },
}));


export default Logo;

