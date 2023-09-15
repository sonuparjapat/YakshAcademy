import axios from "axios"
import { getstudentassignmentfail, getstudentassignmentreq, getstudentassignmentsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const getstudentassignmentrequest=()=>{
    return {type:getstudentassignmentreq}
}
export const getstudentassignsuccess=(payload)=>{
    return {type:getstudentassignmentsucc,payload}
}
export const getstudentassignfailure=()=>{
    return {type:getstudentassignmentfail}
}

export const getstudentassignment=(token)=>(dispatch)=>{
    // obj={...obj,limit:10,page:1}
    dispatch(getstudentassignmentrequest())
    axios.get(`${mainapi}/assignment/getassignments`,{
        // params:obj,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        dispatch(getstudentassignsuccess(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(getstudentassignfailure())
    })
}