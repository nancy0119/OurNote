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

    const [isBookSelected, setBookSelected] = useState(true);
    const [isSearchSelected, setSearchSelected] = useState(false);

    const [canvasMaxWidth, setMaxWidth] = useState(1066);

    function handleBookToggle() {
        setBookSelected(prevValue => {
            if (!prevValue) {
                setSearchSelected(false);
                setMaxWidth(1066);
                return true;
            }
            setMaxWidth(1448);
            return false;
        });
    }

    function handleSearchToggle() {
        setSearchSelected(prevValue => {
            if (!prevValue) {
                setBookSelected(false);
                setMaxWidth(1180);
                return true;
            }
            setMaxWidth(1448);
            return false;
        });
    }

    return <div className="fixed-content">
        <Header />
        <TopNavBar current={currentBar} onChange={handleClick} />
        <BottomNavBar current={currentBar} />
        <div style={{ display: "flex" }}>
            <SideBar book={isBookSelected} search={isSearchSelected} bookClick={handleBookToggle} searchClick={handleSearchToggle} />
            <Canvas maxWidth={canvasMaxWidth} />
        </div>

    </div>;
}

export default App;