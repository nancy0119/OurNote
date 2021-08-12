import React, { useState } from "react";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import NoteBooks from "./NoteBookBar";
import SearchBar from "./SearchBar";

function SideBar() {

    const [isBookSelected, setBookSelected] = useState(true);
    const [isSearchSelected, setSearchSelected] = useState(false);

    function handleBookToggle() {
        setBookSelected(prevValue => {
            if (!prevValue) {
                setSearchSelected(false);
                return true;
            }
            return false;
        });
    }

    function handleSearchToggle() {
        setSearchSelected(prevValue => {
            if (!prevValue) {
                setBookSelected(false);
                return true;
            }

            return false;
        });
    }

    return <div style={{ display: "inline-flex" }}>
        <div className="leftBar">
            <LibraryBooksIcon onClick={handleBookToggle} className={isBookSelected ? "sideIcon currentTab hovering" : "sideIcon hovering"} style={{ display: "block" }} />
            <SearchIcon onClick={handleSearchToggle} className={isSearchSelected ? "sideIcon currentTab hovering" : "sideIcon hovering"} />
        </div>
        <NoteBooks isVisible={isBookSelected} />
        <SearchBar isVisible={isSearchSelected} />
    </div>

}

export default SideBar;
