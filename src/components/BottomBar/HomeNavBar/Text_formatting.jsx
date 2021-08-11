import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';


function TextFormatting() {

    return <div className="bottomObj">
        <div className="vl"></div>

        <Tooltip title="Bullets" arrow placement="bottom">
            <div className="hovering" style={{ marginRight: "5px" }}>
                <FormatListBulletedIcon style={{ marginRight: "3px" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginBottom: "5px" }} />
            </div>
        </Tooltip>

        <Tooltip title="Numbering" arrow placement="bottom">
            <div className="hovering" style={{ marginRight: "5px" }}>
                <FormatListNumberedIcon style={{ marginRight: "3px" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginBottom: "5px" }} />
            </div>
        </Tooltip>

        <Tooltip title="Decrease Indent" arrow placement="bottom"><FormatIndentDecreaseIcon className="hovering" style={{ marginRight: "12px", marginBottom: "3px" }} /></Tooltip>
        <Tooltip title="Increase Indent" arrow placement="bottom"><FormatIndentIncreaseIcon className="hovering" style={{ marginRight: "12px", marginBottom: "3px" }} /></Tooltip>

        <Tooltip title="Paragraph alignment" arrow placement="bottom">
            <div className="hovering" style={{ marginRight: "5px" }}>
                <FormatAlignLeftIcon style={{ marginRight: "3px" }} />
                <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginRight: "12px", marginBottom: "5px" }} />
            </div>
        </Tooltip>
    </div>;
}

export default TextFormatting;