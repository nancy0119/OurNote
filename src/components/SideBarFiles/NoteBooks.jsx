import React from "react";
import NoteIcon from '@material-ui/icons/Note';

function Notebooks(props) {
    return <div style={{ padding: "5%", width: "90%", height: "30px", backgroundColor: props.isCurrent && "#e1dfdd", display: "flex" }}>
        <NoteIcon style={{ color: props.notebookColor }} />
        <p style={{ margin: "auto" }}>{props.title}</p>
    </div>;

}

export default Notebooks;