import axios from "axios"
import { completassignreq, completeassignfail, completeassignsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const completeassigrequest=()=>{
    return {type:completassignreq}
}

export const completeassigsuccess=(payload)=>{
    return {type:completeassignsucc,payload}
}

export const completeassignfailure=()=>{
    return {type:completeassignfail}
}


export const completeassignment=(token,id)=>(dispatch)=>{
    dispatch(completeassigrequest())
    // console.log(token)
    return axios.patch(`${mainapi}/assignment/statuschange/${id}`,{},{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }})
}