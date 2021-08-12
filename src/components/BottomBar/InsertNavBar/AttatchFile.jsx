import React from "react"
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

function AttatchFile() {
    return <div className="bottomObj hovering" style={{ padding: "5px" }}>
        <AttachFileOutlinedIcon />
        <p style={{ margin: "0px 5px" }}>File</p>
        <img src="images/down-arrow.png" style={{ width: "10px", height: "10px" }} />
    </div>;
}

export default AttatchFile;