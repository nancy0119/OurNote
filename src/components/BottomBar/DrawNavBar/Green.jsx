import React from "react";
import { Tooltip } from "@material-ui/core";
function Green (){
    return (
        <Tooltip title ="Green" arrow placement = "bottom">
        <div className="bottomObj hovering" id="type">
            <img className = "color" src = "images/Green_Draw.png" />
        </div>
        </Tooltip>
    );
}
export default Green;