import React, { useState } from "react";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import NoteBooks from "./NoteBookBar";
import SearchBar from "./SearchBar";

function SideBar(props) {


    function handleBookToggle() {
        props.bookClick();
    }

    function handleSearchToggle() {
        props.searchClick();
    }

    return <div style={{ display: "inline-flex" }}>
        <div className="leftBar">
            <LibraryBooksIcon onClick={handleBookToggle} className={props.book ? "sideIcon currentTab hovering" : "sideIcon hovering"} style={{ display: "block" }} />
            <SearchIcon onClick={handleSearchToggle} className={props.search ? "sideIcon currentTab hovering" : "sideIcon hovering"} />
        </div>
        <NoteBooks isVisible={props.book} />
        <SearchBar isVisible={props.search} />
    </div>

}

export default SideBar;
