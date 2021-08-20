import React from "react";
import { Tooltip } from "@material-ui/core";
function Highlighter (){
    return (
        <Tooltip title ="Highlighter" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img src = "images/Highlighter_Draw.png" />
            &emsp;
            <div className="vl"></div>
        </div>
        </Tooltip>
    );
}
export default Highlighter;