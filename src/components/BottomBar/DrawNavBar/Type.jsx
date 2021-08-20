import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


function Type() {

    return <Tooltip title="Type" arrow placement="bottom" >
            <div className="bottomObj hovering" id="type" style={{ padding: "10px"}}>
                <img src="images/Type_Draw.png" />
            </div>
        </Tooltip>     
}

export default Type;