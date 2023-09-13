import axios from "axios"
import { mainapi } from "../../Api/mainapi"
import { createstudentprofilefail, createstudentprofilereq, createstudentprofilesucc } from "./ActionTypes"


export const createstudentprofilerequest=()=>{
    return {type:createstudentprofilereq}
}
export const createstudentprofilesuccess=()=>{
    return {type:createstudentprofilesucc}
}
export const createstudentprofilefailure=()=>{
    return {type:createstudentprofilefail}
}

export const createstudentprofile=(obj,token)=>(dispatch)=>{
    dispatch(createstudentprofilerequest())
  return axios.post(`${mainapi}/userdata/studentprofile`,obj,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
  })
}