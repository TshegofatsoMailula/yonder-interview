import React from "react";

let Fields=({standardApi,setStandardApi})=>
{
    return(<div>
        <label className="font-bold">API Fields</label>
        <div className="grid text-white bg-gray-600 p-2 grid-cols-4">
            <div>
                <span>Field name</span>
            </div>
            <div>
                <span>Parameter</span>
            </div>
            <div>
                <span>Definition</span>
            </div>
            <div>
                <span>Required</span>
            </div>
        </div>
            {standardApi.fields.map((value,index)=>{
                return(<div className="grid bg-white p-2 grid-cols-4">
                    <div>
                    <span>{value.name}</span>
                    </div>
                    <div>
                    <span>{value.parameter}</span>
                    </div>
                    <div>
                    <span>{value.definition}</span>
                    </div>
                    <div>
                    <span>{value.required}</span>
                    </div>
                    </div>)
            })}
    </div>)
}
export default Fields;