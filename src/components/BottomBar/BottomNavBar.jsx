import React from "react";
import HomeBar from "./HomeNavBar/HomeBar";
import InsertBar from "./InsertNavBar/InsertBar";
import DrawBar from "./DrawNavBar/DrawBar"
function BottomNavBar(props) {

    switch (props.current) {
        case "Insert": return <InsertBar />
        case "Draw" : return <DrawBar />
        default: return <HomeBar />
    }
}

export default BottomNavBar;