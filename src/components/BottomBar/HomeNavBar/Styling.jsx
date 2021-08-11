import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import CreateIcon from '@material-ui/icons/Create';

function Styling() {

    return <div className="bottomObj">
        <Tooltip title="Bold" arrow placement="bottom"><div className="hovering" style={{ fontSize: "20px", fontWeight: "bold", padding: "10px", marginRight: "10px" }}>B</div></Tooltip>
        <Tooltip title="Italic" arrow placement="bottom"><div className="hovering" style={{ fontSize: "20px", fontStyle: "italic", padding: "10px", marginRight: "10px" }}>I</div></Tooltip>
        <Tooltip title="Underline" arrow placement="bottom"><div className="hovering" style={{ fontSize: "20px", textDecoration: "underline", padding: "10px", marginRight: "10px" }}>U</div></Tooltip>
        <Tooltip title="Highlight" arrow placement="bottom">
            <div className="hovering" style={{ marginRight: "5px" }}>
                <CreateIcon style={{ height: "20px", width: "20px", padding: "3px 0 0 5px", borderBottom: "3px solid yellow", marginRight: "3px" }} />
                <img src="images/down-arrow.png" style={{ width: "10px", height: "10px", marginRight: "10px", marginBottom: "7px" }} />
            </div></Tooltip>
        <Tooltip title="Font Color" arrow placement="bottom">
            <div className="hovering" style={{ display: "inline-flex" }}>
                <div style={{ fontSize: "20px", padding: "0 5px", borderBottom: "4px solid red" }}>A</div>
                <img src="images/down-arrow.png" style={{ width: "10px", height: "10px", marginRight: "10px", marginTop: "7px" }} /></div></Tooltip>
        <Tooltip title="Format Painter" arrow placement="bottom"><img className="hovering" src="images/paint_brush.png" style={{ marginRight: "10px" }} /></Tooltip>
        <Tooltip title="Clear Formatting" arrow placement="bottom"><img className="hovering" src="images/clear_formatting.png" style={{ height: "32px", width: "30px", padding: "5px 0 0", marginRight: "20px" }} /></Tooltip>
        <Tooltip title="Font" arrow placement="bottom"><hr className="hovering" style={{ borderTop: "5px dotted black", width: "20px" }} /></Tooltip>
    </div>;
}

export default Styling;