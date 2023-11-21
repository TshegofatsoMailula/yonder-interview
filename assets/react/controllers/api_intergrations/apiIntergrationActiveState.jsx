import React from "react";

let ApiIntergrationActiveState=({apiIntergation,setApiIntergration,field,fieldValue})=>
{
    return setApiIntergration(({
        tab: (field==="change_tab"?fieldValue:apiIntergation.tab)
    }))
}
export default ApiIntergrationActiveState;