import React, { useState } from "react";
import Header from "./Header";
import TopNavBar from "./TopBar/TopNavBar";
import SideBar from "./SideBarFiles/SideBar";
import BottomNavBar from "./BottomBar/BottomNavBar";
import Canvas from "./Canvas";

function App() {

    const [currentBar, setCurrentBar] = useState("Home");

    function handleClick(newBar) {
        setCurrentBar(newBar);
    }
    return <div className="fixed-content">
        <Header />
        <TopNavBar current={currentBar} onChange={handleClick} />
        <BottomNavBar current={currentBar} />
        <div style={{ display: "flex" }}>
            <SideBar />
            <Canvas />
        </div>

    </div>;
}

export default App;