import React from "react";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Notebooks from "./NoteBooks";

function NoteBooks(props) {

    let visibility = props.isVisible;
    return <div style={{ display: !visibility && "none" }} className="notebooks">
        <div className="hovering" style={{ padding: "0px 0px 0px 5px", width: "inherit", height: "fit-content", display: "flex", borderBottom: "3px solid #f3f2f1" }}>
            <MenuBookIcon style={{ display: "inline", marginRight: "15px", marginTop: "10px" }} />
            <p style={{ display: "inline", fontWeight: "bold", marginRight: "10px" }}> My NoteBook </p>
            <img src="images/down-arrow.png" style={{ width: "12px", height: "12px", marginTop: "20px" }} />
        </div>
        <div style={{ display: "flex" }}>
            <div style={{ width: "50%", height: "73vh", borderRight: "3px solid #f3f2f1" }}>
                <Notebooks notebookColor="red" isCurrent={true} title="Demo Notebook" />
                <Notebooks notebookColor="green" isCurrent={false} title="Notebook - 1" />
                <div style={{ position: "absolute", bottom: "0px" }}>
                    <center> <p className="hovering" style={{ borderTop: "3px solid #f3f2f1", padding: "10px", width: "22vh", color: "#67217A" }}>Add Section</p></center>
                </div>
            </div>
            <div style={{ width: "50%", height: "73vh" }}>
                <div style={{ position: "absolute", bottom: "0px" }}>
                    <center> <p className="hovering" style={{ borderTop: "3px solid #f3f2f1", padding: "10px", width: "22vh", color: "#67217A" }}>Add Page</p></center>
                </div>
            </div>
        </div>
    </div >;
}

export default NoteBooks;