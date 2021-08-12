import React from "react";
import NavBarItem from "./NavBarItem";

function TopNavBar(props) {


    function handleClick(newItem) {
        props.onChange(newItem);
    }

    return <div className="topNavBar">
        <NavBarItem current={props.current} onClick={handleClick} href="#file" title="File" />
        <NavBarItem current={props.current} onClick={handleClick} href="#home" title="Home" />
        <NavBarItem current={props.current} onClick={handleClick} href="#insert" title="Insert" />
        <NavBarItem current={props.current} onClick={handleClick} href="#draw" title="Draw" />
        <NavBarItem current={props.current} onClick={handleClick} href="#view" title="View" />
        <NavBarItem current={props.current} onClick={handleClick} href="#help" title="Help" />
        <div id="share">
            Share
        </div>
    </div>;
}

export default TopNavBar;