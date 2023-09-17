import axios from "axios"
import { studentsingleassignfail, studentsingleassignreq, studentsingleassignsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const studentsingleassignmentrequest=()=>{
    return {type:studentsingleassignreq}
}

export const studentsignleassignmentsuccess=(payload)=>{
    return {type:studentsingleassignsucc,payload}
}
export const studentsingleassinfailure=()=>{
    return {type:studentsingleassignfail}
}

export const studentsingleassignment=(token,id)=>(dispatch)=>{
  dispatch(studentsingleassignmentrequest())
 return axios.get(`${mainapi}/assignment/getassignment/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}