import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import loaderContext from "../../contexts/loaderContext";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import iPhone from "../../assets/images/iPhone.png";
import Macbook from "../../assets/images/Macbook.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'iPhone',
        imgPath: iPhone,
    },{
        label: 'Macbook',
        imgPath: Macbook,
    }
];

const CarrouselImg = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    useEffect(() => {
        if (!isLoading) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    delay: 3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                },
            });
        } else {
            controls.start({ opacity: 0, y: -50 });
        }
    }, [isLoading, controls]);

    return (
        <motion.div animate={controls} className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.iframe}>
                    <AutoPlaySwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <img
                                        className={classes.img}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                </div>
            </div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
    },
    iframe: {
        position: "absolute",
        top: 200,
        right: -200,
        width: "100%",
        maxWidth: "900px",
    },
    img: {
      width: "100%", 
    },
    wrapper: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        zIndex: -1,
    }
}));

export default CarrouselImg;
