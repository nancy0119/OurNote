import React from "react";
import Tables from "./Tables";
import AttatchFile from "./AttatchFile";
import Pictures from "./Pictures";
import Link from "./Link"
import Audio from "./Audio";
import Symbol from "./Symbol";
import Math from "./Math"
import Emoji from "./Emoji";
import OfficeAddIn from "./officeAddIn";
import MeetingDetails from "./Meeting";

function InsertBar() {
    return <div className="bottomNav" style={{ height: "52px" }}>
        <Tables />
        <AttatchFile />
        <Pictures />
        <Link />
        <Audio />
        <Symbol />
        <Math />
        <Emoji />
        <OfficeAddIn />
        <MeetingDetails />
    </div>
}

export default InsertBar;