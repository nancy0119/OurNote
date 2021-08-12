import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';

function MeetingDetails() {
    return <div className="bottomObj" style={{ marginRight: "10px" }}>

        <div className="hovering" style={{ marginRight: "5px", display: "inline-flex" }}>
            <DescriptionIcon style={{ marginTop: "11px", marginRight: "8px" }} />
            <p>Meeting Details</p>
        </div>
        <div className="vl"></div>
    </div>;
}

export default MeetingDetails;
