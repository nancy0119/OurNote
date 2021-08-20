import React from "react";
import { Tooltip } from "@material-ui/core";
function Marquee (){
    return (
        <Tooltip title ="Marquee Select" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img src = "images/marquee_Draw.png" />
        </div>
        </Tooltip>
    )
}
export default Marquee;