import React from "react";
import ApiIntergrationActiveState from "../apiIntergrationActiveState";
let ApiTabs=({apiIntergration,setApiIntergration})=>
{
    let handleWebTab=()=>
    {
        let field = "change_tab";
        let fieldValue = "web_api";
        return ApiIntergrationActiveState({apiIntergration,setApiIntergration,field,fieldValue});
    }
    let handleUSSDTab=()=>
    {
        let field = "change_tab";
        let fieldValue = "ussd_api";
        return ApiIntergrationActiveState({apiIntergration,setApiIntergration,field,fieldValue});
    }
    let handleWhatsappTab=()=>
    {
        let field = "change_tab";
        let fieldValue = "whatsapp_api";
        return ApiIntergrationActiveState({apiIntergration,setApiIntergration,field,fieldValue});
    }
    return(<div className="bg-gray-300 p-6">
        <div className="lg:grid grid-cols-3 gap-6">
            <div className="border my-4 font-bold hover:text-white p-6 hover:bg-gray-600 hover:cursor-pointer text-center border-black" onClick={handleWebTab}>
                <span>Web</span>
            </div>
            <div className="border my-4 font-bold hover:text-white p-6 hover:bg-gray-600 hover:cursor-pointer text-center border-black"  onClick={handleUSSDTab}>
                <span>USSD</span>
            </div>
            <div className="border p-6 my-4 hover:text-white font-bold hover:bg-gray-600 hover:cursor-pointer text-center border-black"  onClick={handleWhatsappTab}>
                <span>Whatsapp</span>
            </div>
        </div>
    </div>)
}
export default ApiTabs;