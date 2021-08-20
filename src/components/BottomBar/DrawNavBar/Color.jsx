import React from "react";
import { Tooltip } from "@material-ui/core";
function Color (){
    return (
        <Tooltip title ="Black" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img className = "color" src = "images/Color_Draw.png" />
        </div>
        </Tooltip>
    );
}
export default Color;