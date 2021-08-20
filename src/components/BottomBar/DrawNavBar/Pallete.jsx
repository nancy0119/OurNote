import React from "react";
import { Tooltip } from "@material-ui/core";
function Pallete (){
    return (
        <Tooltip title="Pallete" arrow placement="bottom" >
        <div className="bottomObj hovering" id="undo">
            <img src="images/Pallete_Draw.png" />
            <img src="images/down-arrow.png" style={{ width: "12px", height: "12px" }} />
        </div>
        </Tooltip>
    );
}
export default Pallete;