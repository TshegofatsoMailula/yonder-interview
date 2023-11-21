import React from "react";

let Response=({standardApi,setStandardApi})=>
{
    return(<div className="my-6">
        <label className="font-bold">Response Body</label>
        <div className="bg-white p-6">
            <p>&#123;<br/>&emsp;auth_name:''<br/>&emsp;auth_code: '' <br/>&emsp;person: &#123; name: '',surname: ' ' &#125;
            <br/>&#125;</p>
        </div>
    </div>)
}
export default Response;