import React from "react";
import { Tooltip } from "@material-ui/core";
function Pen (){
    return (
        <Tooltip title ="Pen" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img src = "images/Pencil_Draw.png" />
        </div>
        </Tooltip>
    );
}
export default Pen;