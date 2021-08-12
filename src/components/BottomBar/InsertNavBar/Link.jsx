import React from "react";
import InsertLinkOutlinedIcon from '@material-ui/icons/InsertLinkOutlined';

function Link() {
    return <div className="bottomObj hovering" style={{ padding: "5px" }}>
        <InsertLinkOutlinedIcon style={{ marginRight: "5px" }} />
        <p>Link</p>
    </div>;
}

export default Link;