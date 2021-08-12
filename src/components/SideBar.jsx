import React from "react";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';

function SideBar() {
    return <div className="leftBar">
        <LibraryBooksIcon className="sideIcon currentTab hovering" style={{ display: "block" }} />
        <SearchIcon className="sideIcon hovering" />
    </div>
}

export default SideBar;