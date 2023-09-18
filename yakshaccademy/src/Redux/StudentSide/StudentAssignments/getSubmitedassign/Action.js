import axios from "axios";
import { getsubmittedassignfail, getsubmittedassignreq, getsubmittedassignsucc } from "./ActtionTypes";
import { mainapi } from "../../../Api/mainapi";
export const getsubassignrequest=()=>{
    return {type:getsubmittedassignreq}
}
export const getsubmittedassignmentsuccess=(payload)=>{
    return {type:getsubmittedassignsucc,payload}
}
export const getsubassignfailure=()=>{
    return {type:getsubmittedassignfail}
}

export const getsubmittedassignment=(token,id)=>(dispatch)=>{
  
    dispatch(getsubassignrequest())
    return axios.get(`${mainapi}/assignment/submittedassignment/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}
