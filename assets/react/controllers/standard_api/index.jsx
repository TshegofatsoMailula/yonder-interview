import React,{useState,useEffect} from "react";
import StandardApiActiveState from "./standardApiActiveState";
import EndPointField from "./component/endpoint_field";
import axios from "axios";
import Authentication from "./component/authentication";
import Parameters from "./component/parameters";
import Response from "./component/response";
import Fields from "./component/fields";
let Index=(prop)=>
{
    let [standardApi,setStandardApi] = useState(({
        link: prop.link,
        method: prop.method,
        headers: prop.headers,
        account_status: true,
        fields:[{
            name: "Authorization name",
            parameter: "auth_name",
            definition: "",
            required: "yes"
        },{
            name: "Authorization code",
            parameter: "auth_code",
            definition: "",
            required: "yes"
        },{
            name: "Name",
            parameter: "name",
            definition: "",
            required: "yes"
        },{
            name: "Surname",
            parameter: "surname",
            definition: "",
            required: "no"
        }]
    }));
    useEffect(()=>{
        let data = {"account_status":standardApi.account_status,"auth_name":"Test User","auth_code":"Azwyx","person":{"name":"tshego","surname":"mailula"}};
        let headers = {headers:{'Content-type':'application/json'}};
        axios.post('/access-yomo-dashboard',data,headers)
        .then(response=>{
            console.log(response);
        })
    },[])
    return(<div>
        <h1 className="font-bold text-lg">Getting Started</h1>
        <div>
           <EndPointField standardApi={standardApi} setStandardApi={setStandardApi}/>
        </div>
        <div className="bg-gray-300 p-6 my-6">
            <Fields standardApi={standardApi} setStandardApi={setStandardApi}/>
        </div>
        <div className="bg-gray-300 p-6 my-6">
            <Authentication standardApi={standardApi} setStandardApi={setStandardApi}/>
            <Parameters standardApi={standardApi} setStandardApi={setStandardApi}/>
            <Response standardApi={standardApi} setStandardApi={setStandardApi}/>
        </div>
    </div>)
}
export default Index;