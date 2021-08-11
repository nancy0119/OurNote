import React from "react";

function Tags() {
    return <div className="bottomObj" style={{ marginRight: "10px" }}>
        <div className="hovering" style={{ marginRight: "5px", display: "inline-flex" }}>
            <img src="images/tags.png" style={{ marginTop: "10px" }} />
            <p style={{ marginRight: "3px" }} >Tags</p>
            <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginTop: "20px" }} />
        </div>
        <div className="vl"></div>
    </div>;
}

export default Tags;