import axios from "axios"
import { getsignleassignmentfail, getsignleassignmentreq, getsingleassignmentsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const getsignleassignmentrequest=()=>{
    return {type:getsignleassignmentreq}
}

export const getsingleassignmentsuccess=(payload)=>{
    return {type:getsingleassignmentsucc,payload}
}
export const getsignleassignmentfailure=()=>{
    return {type:getsignleassignmentfail}
}

export const getsingleassignment=(token,id)=>(dispatch)=>{
    dispatch(getsignleassignmentrequest())
   return axios.get(`${mainapi}/assignment/getinstructerassignment/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}