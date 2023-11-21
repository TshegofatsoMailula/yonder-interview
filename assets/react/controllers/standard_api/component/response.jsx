import React from "react";

let Response=({standardApi,setStandardApi})=>
{
    return(<div className="my-6">
        <label className="font-bold">Response Body</label>
        <div className="bg-white p-6">
            <p>&#123;<br/>&emsp;data: &#123;name:, surname&#125;<br/>&emsp;Status: 200<br/>&emsp;statusText: OK <br/>&#125;</p>
        </div>
    </div>)
}
export default Response;