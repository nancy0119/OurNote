import React from "react";

function Pictures() {
    return <div className="bottomObj hovering" style={{ padding: "5px" }}>
        <img src="images/pictures.png" />
        <p style={{ margin: "0px 5px" }}>Picture</p>
        <img src="images/down-arrow.png" style={{ width: "10px", height: "10px" }} />
    </div>;
}

export default Pictures;