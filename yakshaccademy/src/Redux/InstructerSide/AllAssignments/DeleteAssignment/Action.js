import axios from "axios"
import { deleteassignmentfail, deleteassignmentreq, deleteassignmentsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const deleteassignmentrequest=()=>{
    return {type:deleteassignmentreq}
}
export const deleteassignmentsuccess=()=>{
    return {type:deleteassignmentsucc}
}
export const deleteassignmentfailure=()=>{
    return {type:deleteassignmentfail}
}


export const deleteassignment=(token,id)=>(dispatch)=>{
    dispatch(deleteassignmentrequest())
   return axios.delete(`${mainapi}/assignment/deleteassignment/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}