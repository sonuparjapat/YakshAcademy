import axios from "axios"
import { deleteadminfail, deleteadminreq, deleteadminsucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const deleteadminrequest=()=>{
    return {type:deleteadminreq}
}
export const deleteadminsucess=()=>{
    return {type:deleteadminsucc}
}
export const deleteadminfailure=()=>{
    return {type:deleteadminfail}
}

export const deleteadmin=(token,id)=>(dispatch)=>{
    dispatch(deleteadminrequest())
    return axios.delete(`${mainapi}/admin/removeadmin/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}