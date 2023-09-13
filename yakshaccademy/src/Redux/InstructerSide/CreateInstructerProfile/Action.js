import axios from "axios"
import { createinstprofilefail, createinstprofilereq, createinstprofilesucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const createinstructerprofilerequest=()=>{
    return {type:createinstprofilereq}
}

export const createinstructerprofilesuccess=()=>{
    return {type:createinstprofilesucc}
}
export const createinstructerprofilefailure=()=>{
    return {type:createinstprofilefail}
}

export const createinstruterprofile=(obj,token)=>(dispatch)=>{
    dispatch(createinstructerprofilerequest())
    return axios.post(`${mainapi}/userdata/instructerprofile`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}