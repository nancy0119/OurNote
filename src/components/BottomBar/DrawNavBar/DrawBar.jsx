import React from "react";
import Type from "./Type";
import Marquee from "./Marquee";
import Eraser from "./Eraser";
import Pen from "./Pen";
import Highlighter from "./Highlighter";
import Color from "./Color";
import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";
import Pallete from "./Pallete";
import Thickness from "./Thickness";
import Math from "./Math";

function DrawBar(){
    return (<div className="bottomNav" style={{ height: "52px" }}>
        <Type />
        <Marquee />
        <Eraser />
        <Pen />
        <Highlighter />
        <Color />
        <Blue />
        <Green />
        <Red /> 
        <Pallete />
        <Thickness />
        <Math />
    </div>)
}
export default DrawBar;