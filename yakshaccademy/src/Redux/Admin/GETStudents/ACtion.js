import axios from "axios"
import { getadmininstsucc, getadminstudentfail, getadminstuntreq } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const getadminstudrequest=()=>{
    return {type:getadminstuntreq}
}
export const getadminstuntsuccess=(payload)=>{
    return {type:getadmininstsucc,payload}
}

export const getadminstudfailure=()=>{
    return {type:getadminstudentfail}
}

export const getadminstudents=(token,obj)=>async(dispatch)=>{
    // console.log(token,"tooken")
    dispatch(getadminstudrequest())
    axios.get(`${mainapi}/admin/students`,{
        params:obj,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        // console.log(res)
        dispatch(getadminstuntsuccess(res.data.msg))
    }).catch((err)=>{
        // console.log(err)
        dispatch(getadminstudfailure())
    })
}