import React from "react";


function Styles() {
    return <div className="bottomObj" style={{ marginRight: "10px" }}>
        <div className="vl" style={{ marginRight: "15px" }}></div>

        <div className="hovering" style={{ marginRight: "5px", display: "inline-flex" }}>
            <img src="images/paint_style.png" style={{ marginTop: "9px" }} />
            <p style={{ marginRight: "3px" }} >Styles</p>
            <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginTop: "20px" }} />
        </div>
        <div className="vl"></div>
    </div>;
}

export default Styles;