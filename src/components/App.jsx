import React from "react";
import Header from "./Header";
import TopNavBar from "./TopBar/TopNavBar";
import SideBar from "./SideBar";
import BottomNavBar from "./BottomBar/BottomNavBar";

function App() {
    return <div>
        <Header />
        <TopNavBar />
        <BottomNavBar />
        <SideBar />
    </div>;
}

export default App;