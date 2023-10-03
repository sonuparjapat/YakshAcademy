import axios from "axios"
import {getnotreq,getnotsucc,getnotfail} from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"
export const getnotrequest=()=>{
    return {type:getnotreq}
}
export const getnotsuccess=(payload)=>{
    return {type:getnotsucc,payload}
}
export const getnotfailure=()=>{
    return {type:getnotfail}
}

export const getnotifications=(token)=>(dispatch)=>{
    dispatch(getnotrequest())
    axios.get(`${mainapi}/assignment/notifications`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(getnotsuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getnotfailure())
    })
}