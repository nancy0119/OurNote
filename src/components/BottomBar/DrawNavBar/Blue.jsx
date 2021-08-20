import React from "react";
import { Tooltip } from "@material-ui/core";
function Blue (){
    return (
        <Tooltip title ="Blue" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img className = "color" src = "images/Blue_Draw.png" />
        </div>
        </Tooltip>
    );
}
export default Blue;