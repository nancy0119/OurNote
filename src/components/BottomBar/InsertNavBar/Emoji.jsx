import React from "react";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Emoji() {
    return <div className="bottomObj hovering" style={{ padding: "5px" }}>
        <InsertEmoticonIcon />
        <p style={{ margin: "0px 5px" }}>Emoji</p>
        <img src="images/down-arrow.png" style={{ width: "10px", height: "10px" }} />
    </div>;
}

export default Emoji;