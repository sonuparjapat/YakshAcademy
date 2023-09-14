import axios from "axios"
import { editassignmentfail, editassignmentreq, editassignmentsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const editassignmentrequest=()=>{
    return {type:editassignmentreq}
}

export const editassignmentsuccess=()=>{
    return {type:editassignmentsucc}
}

export const editassignmentfailure=()=>{
    return {type:editassignmentfail}
}
export const editassignment=(token,id)=>(dispatch)=>{
    dispatch(editassignmentrequest())
    return axios.patch(`${mainapi}/assignment/patchassignment/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        } 
    })
}