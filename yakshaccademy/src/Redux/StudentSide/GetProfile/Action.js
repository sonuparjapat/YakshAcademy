import axios from "axios"
import { mainapi } from "../../Api/mainapi"
import { getstudentprofilefail, getstudentprofilereq, getstudentprofilesucc } from "./ActionTypes"

export const getstudentprofilerequest=()=>{
    return {type:getstudentprofilereq}
}

export const getstudentprofilesuccess=(payload)=>{
    return {type:getstudentprofilesucc,payload}
}
export const getstudentprofilefailure=()=>{
    return {type:getstudentprofilefail}
}

export const getstudentprofile=(token)=>(dispatch)=>{
    dispatch(getstudentprofilerequest())
    axios.get(`${mainapi}/userdata/studentprofile`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
    // console.log(res)
        dispatch(getstudentprofilesuccess(res.data))}).catch((err)=>
        dispatch(getstudentprofilefailure()))
}