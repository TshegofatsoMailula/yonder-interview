import React from "react";

let ApiIntergrationActiveState=({apiIntergartion,setApiIntergration,field,fieldValue})=>
{
    return setApiIntergration(({
        tab: (field==="change_tab"?fieldValue:apiIntergration.tab)
    }))
}
export default ApiIntergrationActiveState;