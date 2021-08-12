import React from "react";
import MenuBookIcon from '@material-ui/icons/MenuBook';

function NoteBooks(props) {

    let visibility = props.isVisible;
    return <div style={{ display: !visibility && "none" }} className="notebooks">
        <div className="hovering" style={{ padding: "0px 5px", width: "inherit", height: "fit-content", display: "flex" }}>
            <MenuBookIcon style={{ display: "inline", marginRight: "15px", marginTop: "10px" }} />
            <p style={{ display: "inline", fontWeight: "bold", marginRight: "10px" }}> My NoteBook </p>
            <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginTop: "20px" }} />
        </div>
    </div >
}

export default NoteBooks;