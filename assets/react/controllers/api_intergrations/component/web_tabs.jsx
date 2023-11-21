import React from "react";

let WebTabs=({apiIntergration,setApiIntergration})=>
{
    return(<div className="bg-gray-300 my-6 p-6">
        <div  className="lg:grid grid-cols-3 gap-6">
            <div className="border font-bold my-4 hover:text-white p-4 hover:bg-gray-600 hover:cursor-pointer text-center border-black">
                <span>Subscribe to Promo</span>
            </div>
            <div className="border font-bold my-4 hover:text-white p-4 hover:bg-gray-600 hover:cursor-pointer text-center border-black">
                <span>Get Promo Details</span>
            </div>
            <div className="border font-bold my-4 hover:text-white p-4 hover:bg-gray-600 hover:cursor-pointer text-center border-black">
                <span>Unsubscribe from promo</span>
            </div>
        </div>
    </div>)
}
export default WebTabs;