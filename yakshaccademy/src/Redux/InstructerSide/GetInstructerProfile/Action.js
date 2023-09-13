import axios from "axios"
import { getinstprofilefail, getinstprofilereq, getinstprofilesucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const getinstructerprofilerequest=()=>{
    return {type:getinstprofilereq}
}

export const getinstructerprofilesuccess=(payload)=>{
    return {type:getinstprofilesucc,payload}
}
export const getinstructerfailure=()=>{
    return {type:getinstprofilefail}
}

export const getinstructerprofile=(token)=>(dispatch)=>{
    axios.get(`${mainapi}/userdata/instructerprofile`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>dispatch(getinstructerprofilesuccess(res.data.msg))).catch((err)=>dispatch(getinstructerfailure()))
}