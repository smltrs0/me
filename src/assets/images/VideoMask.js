import * as React from "react";
import { useTheme } from "@material-ui/core/styles";

const VideoMask = (props) => {
    const theme = useTheme();
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill={theme.palette.background.default} stroke="#000" stroke-width="2" d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"/>
      </svg>
    );
};

export default VideoMask;
