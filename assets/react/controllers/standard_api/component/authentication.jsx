import React from "react";

let Authentication=({standardApi,setStandardApi})=>
{
    return(<div>
    <label className="font-bold">Authentication Details</label>
    <div className="lg:grid grid-cols-2 gap-6">
    <div>
        <label className="font-bold">Authorization Name</label>
        <div className='shadow-sm my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
            <span>Test User</span>
        </div>
    </div>
    <div>
        <label className="font-bold">Authorization Code</label>
        <div className='shadow-sm my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
            <span>Azwyx</span>
        </div>
    </div>
    </div>
    </div>)
}
export default Authentication;