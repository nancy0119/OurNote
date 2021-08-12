import React, { useState } from "react";
import Header from "./Header";
import TopNavBar from "./TopBar/TopNavBar";
import SideBar from "./SideBarFiles/SideBar";
import BottomNavBar from "./BottomBar/BottomNavBar";

function App() {

    const [currentBar, setCurrentBar] = useState("Home");

    function handleClick(newBar) {
        setCurrentBar(newBar);
    }
    return <div>
        <Header />
        <TopNavBar current={currentBar} onChange={handleClick} />
        <BottomNavBar current={currentBar} />
        <SideBar />
    </div>;
}

export default App;