import axios from "axios"
import { instassignmentfail, instassignmentreq, instassignmentsucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"

export const instassignmentrequest=()=>{
    return {type:instassignmentreq}
}
export const instassignmentsuccess=(payload)=>{
    return {type:instassignmentsucc, payload}
}
export const instassignmentfailure=()=>{
    return {type:instassignmentfail}
}


export const instassignments=(token,obj)=>(dispatch)=>{
    // console.log(obj)
    obj={...obj,limit:10}
    dispatch(instassignmentrequest())
    axios.get(`${mainapi}/assignment/allinstructerassignment`,{
        params:obj,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        // console.log(res)
        
        dispatch(instassignmentsuccess(res.data))}).catch((err)=>dispatch(instassignmentfailure()))
}