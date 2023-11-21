import React from "react";

let EndPointField=({standardApi,setStandardApi})=>
{
    return(<div className="bg-gray-300 p-6">
        <div className="lg:grid gap-6 grid-cols-2">
        <div>
        <label className="font-bold">Standard API Endpoint</label>
        <div className='shadow-sm my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
            <span>{standardApi.link}</span>
        </div>
        </div>
        <div>
        <label className="font-bold">Method</label>
        <div className='shadow-sm my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
            <span>{standardApi.method}</span>
        </div>
        </div>
        </div>
        <div>
            <label className="font-bold">Headers</label>
            <div className='shadow-sm my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
            <span>{standardApi.headers}</span>
        </div>
        </div>
    </div>)
}
export default EndPointField;