import axios from "axios"
import { mainapi } from "../../Api/mainapi"
import { updatestudentprofilefail, updatestudentprofilereq, updatestudentprofilesucc } from "./ActionTypes"

export const updatestudentprofilerequest=()=>{
    return {type:updatestudentprofilereq}
}
export const updatestudentupdateprofilesuccess=()=>{
    return {type:updatestudentprofilesucc}
}
export const updatestudentprofilefailure=()=>{
    return {type:updatestudentprofilefail}
}

export const updatestudentprofile=(id,token,obj)=>(dispatch)=>{
    dispatch(updatestudentprofilerequest())
    return axios.patch(`${mainapi}/userdata/studentprofile/edit/${id}`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })  
}