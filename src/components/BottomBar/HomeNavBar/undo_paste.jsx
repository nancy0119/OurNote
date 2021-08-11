import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


function UndoPaste() {

    return <div>
        <Tooltip title="Undo" arrow placement="bottom" >
            <div className="bottomObj hovering" id="undo">
                <img src="images/undo_icon.png" />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px" }} />
            </div>
        </Tooltip>
        <Tooltip title="Clipboard" arrow placement="bottom" >
            <div className="bottomObj hovering" id="copyPaste">
                <img src="images/clipboard.png" />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px" }} />
            </div>
        </Tooltip>
    </div>;
}

export default UndoPaste;