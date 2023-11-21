import React,{useState,useEffect} from "react";
import StandardApiActiveState from "./standardApiActiveState";
import EndPointField from "./component/endpoint_field";
import axios from "axios";
import Authentication from "./component/authentication";
let Index=(prop)=>
{
    let [standardApi,setStandardApi] = useState(({
        link: prop.link,
        method: prop.method
    }));
    useEffect(()=>{
        let data = {"auth_name":"","auth_code":"","person":{"name":"tshego","surname":"mailula"}};
        let headers = {headers:{'Content-type':'application/json'}};
        axios.post('/find-person-by-name',data,headers)
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
            <Authentication standardApi={standardApi} setStandardApi={setStandardApi}/>
        </div>
    </div>)
}
export default Index;