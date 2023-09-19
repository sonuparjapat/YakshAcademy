import axios from "axios"
import { createassignmentfail, createassignmentreq, createassignmentsucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const createassignmentrequest=()=>{
    return {type:createassignmentreq}
}
export const createassignmentsuccess=()=>{
    return {type:createassignmentsucc}
}
export const createassignmentfailure=()=>{
    return {type:createassignmentfail}
}

export const createassignment=(token,obj)=>(dispatch)=>{
    dispatch(createassignmentrequest())
    return axios.post(`http://localhost:8080/assignment/instructerassignment`,obj,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}