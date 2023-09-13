import axios from "axios"
import { updateinstprofilefail, updateinstprofilereq, updateinstprofilesucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const updateinstprofilerequest=()=>{
    return {type:updateinstprofilereq}
}
export const updateinstprofilesuccess=()=>{
    return {type:updateinstprofilesucc}
}
export const updateinstprofilefailure=()=>{
    return {type:updateinstprofilefail}
}


export const updateinstprofile=(id,token,obj)=>(dispatch)=>{
    dispatch(updateinstprofilerequest())
return axios.patch(`${mainapi}/userdata/instructerprofile/edit/${id}`,obj,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
})
}