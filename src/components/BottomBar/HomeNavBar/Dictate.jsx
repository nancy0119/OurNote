import React from "react";
import MicIcon from '@material-ui/icons/Mic';
import { Tooltip } from "@material-ui/core";

function Dictate() {
    return <div className="bottomObj" style={{ marginRight: "10px" }}>

        <Tooltip title="Dictate" arrow placement="bottom">
            <div className="hovering" style={{ marginRight: "5px", display: "inline-flex" }}>
                <MicIcon style={{ marginRight: "3px" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginTop: "6px" }} />
            </div>
        </Tooltip>
        <div className="vl"></div>
    </div>;
}

export default Dictate;