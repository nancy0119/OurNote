import React, { useState } from "react";
import NavBarItem from "./NavBarItem";

function TopNavBar() {

    const [currentSelected, setSelected] = useState("Home");

    function handleClick(newItem) {
        console.log(newItem);
        setSelected(newItem);
    }

    return <div className="topNavBar">
        <NavBarItem current={currentSelected} onClick={handleClick} href="#file" title="File" />
        <NavBarItem current={currentSelected} onClick={handleClick} href="#home" title="Home" />
        <NavBarItem current={currentSelected} onClick={handleClick} href="#insert" title="Insert" />
        <NavBarItem current={currentSelected} onClick={handleClick} href="#draw" title="Draw" />
        <NavBarItem current={currentSelected} onClick={handleClick} href="#view" title="View" />
        <NavBarItem current={currentSelected} onClick={handleClick} href="#help" title="Help" />
        <div id="share">
            Share
        </div>
    </div>;
}

export default TopNavBar;