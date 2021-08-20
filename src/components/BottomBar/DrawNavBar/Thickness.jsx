import React from "react";
import { Tooltip } from "@material-ui/core";
function Thickness (){
    return (
        <Tooltip title="Thickness" arrow placement="bottom" >
        <div className="bottomObj hovering" id="undo">
        <div className="vl">&ensp;</div>
            <img src="images/Thickness_Draw.png" />
            <img src="images/down-arrow.png" style={{ width: "12px", height: "12px" }} />
        </div>
        </Tooltip>
    );
}
export default Thickness;