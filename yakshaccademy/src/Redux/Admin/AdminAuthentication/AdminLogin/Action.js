import axios from "axios"
import { adminlogfail, adminlogreq, adminlogsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const adminlogrequest=()=>{
    return {type:adminlogreq}
}
export const adminlogsuccess=(payload)=>{
    return {type:adminlogsucc,payload}
}

export const adminlogfailure=()=>{
    return {type:adminlogfail}
}


export const adminlogin=(obj)=>(dispatch)=>{
    dispatch(adminlogrequest())
    return axios.post(`${mainapi}/admin/login`,obj)
}