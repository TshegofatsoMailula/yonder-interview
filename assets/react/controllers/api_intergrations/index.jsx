import React,{useState} from "react";
import ApiTabs from "./component/api_tabs";
let Index=()=>
{
    let [apiIntergation,setApiIntergration] = useState(({
        tab: "dashboard"
    }))
    return(<div>
        <ApiTabs apiIntergation={apiIntergation} setApiIntergration={setApiIntergration}/>
    </div>)
}
export default Index;