import axios from "axios"
import { submitsdtassignfail, submitsdtassignsucc, submitstudentassignreq } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const submitstdassignrequest=()=>{
    return {type:submitstudentassignreq}
}
export const submitstdassignsuccess=()=>{
    return {type:submitsdtassignsucc}
}
export const submitstdassignfailure=()=>{
    return {type:submitsdtassignfail()}
}


export const submitstudentassignment=(token,obj)=>(dispatch)=>{
 dispatch(submitstdassignrequest())
 return axios.post(`${mainapi}/assignment/submitassignment`,obj,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
 })
}