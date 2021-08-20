import React from "react";
import { Tooltip } from "@material-ui/core";
function Red (){
    return (
        <Tooltip title ="Red" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img className = "color" src = "images/Red_Draw.png" />
        </div>
        </Tooltip>
    );
}
export default Red;