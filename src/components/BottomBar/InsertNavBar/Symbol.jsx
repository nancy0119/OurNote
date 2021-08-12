import React from "react";
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';

function Symbol() {
    return <div className="bottomObj hovering" style={{ padding: "5px" }}>
        <EmojiSymbolsIcon style={{ marginRight: "5px" }} />
        <p>Symbol</p>
    </div>;
}

export default Symbol;