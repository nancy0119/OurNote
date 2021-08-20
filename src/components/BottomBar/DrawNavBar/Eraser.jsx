import React from "react";
import { Tooltip } from "@material-ui/core";
function Eraser (){
    return (
        <Tooltip title ="Eraser" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img src = "images/Eraser_Draw.png" />
        </div>
        </Tooltip>
    );
}
export default Eraser;