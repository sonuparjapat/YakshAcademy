import axios from "axios"
import { getadmindatafail, getadmindatareq, getadmindatasucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const getadmindatarequest=()=>{
    return {type:getadmindatareq}
}

export const getadmindatasuccess=(payload)=>{
    return {type:getadmindatasucc,payload}
}

export const getadmindatafailure=()=>{
    return {type:getadmindatafail}
}

export const getadmindata=(token,obj)=>(dispatch)=>{
    dispatch(getadmindatarequest())
if(forwhat=="admins"){
    axios.get(`${mainapi}/admin/admins`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(getadmindatasuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getadmindatafailure())
    })
}
if(forwhat=="students"){
    axios.get(`${mainapi}/admin/students`,{
        "params":obj,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(getadmindatasuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getadmindatafailure())
    })
}
if(forwhat=="instructers"){
    axios.get(`${mainapi}/admin/instructers`,{
        "params":obj,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(getadmindatasuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getadmindatafailure())
    }) 
}

}