import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import { CircularProgress } from "@material-ui/core";

const Loader = () => {
    return (
        <LoaderContainer>
            <CircularProgress color="inherit" />
        </LoaderContainer>
    );
};

export default Loader;
