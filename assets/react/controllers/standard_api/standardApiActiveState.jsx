import React from "react";

let StandardApiActiveState=({standardApi,setStandardApi,field,fieldValue})=>
{
    return setStandardApi(({
        link: (field==="link"?fieldValue:standardApi.link),
        method: (field==="method"?fieldValue:standardApi.method),
        headers: (field==="headers"?fieldValue:standardApi.headers),
        fields: standardApi.fields,
        account_status: standardApi.account_status
    }));
}
export default StandardApiActiveState;