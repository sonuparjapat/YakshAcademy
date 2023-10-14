import axios from "axios"
import { adminregfail, adminregreq, adminregsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"



export const adminregrequest=()=>{
    return {type:adminregreq}
}
export const adminregsuccess=()=>{
    return {type:adminregsucc}
}

export const adminregfailure=()=>{
    return {type:adminregfail}
}

export const adminreg=(token,obj)=>(dispatch)=>{
    dispatch(adminregrequest())
    return axios.post(`${mainapi}/admin/register`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}