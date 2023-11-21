import React from "react";

let SmFields=({standardApi,setStandardApi})=>
{
    return(<div>
        <label className="font-bold">API Fields</label>
        <div>
        {standardApi.fields.map((value,index)=>{
            return(<div className="bg-gray-300 p-6 rounded-md text-center my-4">
                <div className="p-2 font-bold">
                    <span>Field name</span>
                </div>
                <div className="bg-white p-2">
                    <span>{value.name}</span>
                </div>
                <div className="p-2 font-bold">
                    <span>Parameter</span>
                </div>
                <div className="bg-white p-2">
                    <span>{value.parameter}</span>
                </div>
                <div className="p-2 font-bold">
                    <span>Required</span>
                </div>
                <div className="bg-white p-2">
                    <span>{value.required}</span>
                </div>
            </div>)
        })}
        </div>
    </div>)
}
export default SmFields;