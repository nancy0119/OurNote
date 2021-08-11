import React from "react";
import DynamicFeedRoundedIcon from '@material-ui/icons/DynamicFeedRounded';

function Feed() {
    return <div className="bottomObj">
        <div className="hovering" style={{ marginRight: "5px", display: "inline-flex" }}>
            <DynamicFeedRoundedIcon style={{ marginRight: "3px", marginTop: "15px" }} />
            <p style={{ marginRight: "3px" }} >Feed</p>
        </div>
        <div className="vl"></div>
    </div>;
}

export default Feed;