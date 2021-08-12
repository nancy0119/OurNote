import React from "react";
import HomeBar from "./HomeNavBar/HomeBar";
import InsertBar from "./InsertNavBar/InsertBar";

function BottomNavBar(props) {

    switch (props.current) {
        case "Insert": return <InsertBar />
        default: return <HomeBar />
    }
}

export default BottomNavBar;