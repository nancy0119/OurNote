import React from "react";


function SearchBar(props) {
    let visibility = props.isVisible;
    return <div style={{ display: !visibility && "none", width: "30vh" }} className="notebooks">
        <div style={{ padding: "5px", width: "inherit", height: "fit-content", display: "block", borderBottom: "3px solid #f3f2f1" }}>
            <input type="text" placeholder="Search" style={{ width: "25vh", padding: "10px", marginBottom: "10px" }} />
            <input type="text" placeholder="Notebook" style={{ width: "15vh", padding: "5px" }}></input>
        </div>
    </div >
}

export default SearchBar;