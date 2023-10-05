import axios from "axios"
import { getsinglenotfail, getsinglenotreq, getsinglenotsucc } from "./ActionTypes"
import { mainapi } from "../../../Api/mainapi"

export const getsinglenotrequest=()=>{
    return {type:getsinglenotreq}
}

export const getsinglenotsuccess=(payload)=>{
    return {type:getsinglenotsucc,payload}
}
export const getsinglefailure=()=>{
    return {type:getsinglenotfail}
}

export const getsinglenoti=(token,id)=>(dispatch)=>{
    dispatch(getsinglenotrequest())
    axios.get(`${mainapi}/assignment/notifications/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(getsinglenotsuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getsinglefailure())
    })
}