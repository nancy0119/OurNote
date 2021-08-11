import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

function Font_Size() {

    return <div className="bottomObj" style={{ marginRight: "20px" }}>
        <div className="vl"></div>
        <Tooltip title="Font" arrow placement="bottom">
            <div className="fonts hovering">
                <input type="text" value="Calibiri" style={{ padding: "4px", fontSize: "15px", width: "130px", border: "none" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px" }} />
            </div>
        </Tooltip>
        <Tooltip title="Font Size" arrow placement="bottom" >
            <div className="fonts hovering">
                <input type="text" value="20" style={{ padding: "4px", fontSize: "15px", width: "40px", border: "none" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px" }} />
            </div>
        </Tooltip>
    </div>;

}

export default Font_Size;