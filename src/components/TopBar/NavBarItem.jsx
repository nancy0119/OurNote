import React, { useState } from "react";

function TopNavItem(props) {

    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseLeave() {
        setMouseOver(false);
    }

    function handleClick(event) {
        props.onClick(props.title);
        event.preventDefault();
    }

    let isCurrent = props.current === props.title ? true : false;

    return <a
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver && "#EDEBE9", fontWeight: isCurrent ? "bold" : isMouseOver && "bold", borderBottom: isCurrent && isMouseOver && "3px solid #7718aa" }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        id={props.title}
        href={props.href} >
        <div style={{ borderBottom: isCurrent && !isMouseOver && "3px solid #7718aa" }} className="topBarText">{props.title}
        </div>
    </a>;
}

export default TopNavItem;