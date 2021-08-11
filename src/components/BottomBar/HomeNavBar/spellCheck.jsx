import React from "react";
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import { Tooltip } from "@material-ui/core";

function SpellCheck() {
    return <div className="bottomObj" style={{ marginRight: "10px" }}>

        <Tooltip title="Spelling" arrow placement="bottom">
            <div className="hovering" style={{ marginRight: "5px", display: "inline-flex" }}>
                <SpellcheckIcon style={{ marginRight: "4px" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginTop: "6px" }} />
            </div>
        </Tooltip>
        <div className="vl"></div>
    </div>;
}

export default SpellCheck;