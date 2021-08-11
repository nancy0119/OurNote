import React from "react";
import UndoPaste from "./undo_paste";
import Font_Size from "./Font_Size";
import Styling from "./Styling";
import TextFormatting from "./Text_formatting";
import Styles from "./Styles";
import Tags from "./Tags";
import Spellcheck from "./spellCheck";
import Dictate from "./Dictate";
import Feed from "./Feed";

function HomeBar() {
    return <div className="bottomNav">
        <UndoPaste />
        <Font_Size />
        <Styling />
        <TextFormatting />
        <Styles />
        <Tags />
        <Spellcheck />
        <Dictate />
        <Feed />
    </div>
}

export default HomeBar;