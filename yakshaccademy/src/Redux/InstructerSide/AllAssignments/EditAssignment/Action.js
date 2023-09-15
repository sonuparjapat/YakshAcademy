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
export const insteditassignment=(token,id,obj)=>(dispatch)=>{
    dispatch(editassignmentrequest())
    return axios.patch(`${mainapi}/assignment/patchassignment/${id}`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        } 
    })
}