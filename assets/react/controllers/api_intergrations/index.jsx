import React,{useState} from "react";
import ApiTabs from "./component/api_tabs";
import WebTabs from "./component/web_tabs";
import UssdTab from "./component/ussd_tab";
import WhatsappTab from "./component/whatsapp_tab";
let Index=()=>
{
    let [apiIntergration,setApiIntergration] = useState(({
        tab: "dashboard"
    }))
    return(<div>
        <ApiTabs apiIntergration={apiIntergration} setApiIntergration={setApiIntergration}/>
        <div className={apiIntergration.tab==="web_api"?"block":"hidden"}>
        <WebTabs apiIntergration={apiIntergration} setApiIntergration={setApiIntergration}/>
        </div>
        <div className={apiIntergration.tab==="ussd_api"?"block":"hidden"}>
        <UssdTab apiIntergration={apiIntergration} setApiIntergration={setApiIntergration}/>
        </div>
        <div className={apiIntergration.tab==="whatsapp_api"?"block":"hidden"}>
        <WhatsappTab apiIntergration={apiIntergration} setApiIntergration={setApiIntergration}/>
        </div>
    </div>)
}
export default Index;