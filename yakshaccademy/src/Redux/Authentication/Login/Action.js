import { mainapi } from "../../Api/mainapi"
import axios from "axios"
import { logfail, logreq, logsucc } from "./ActionTypes"

export const loginrequest=()=>{
    return {type:logreq}
}

export const loginsuccess=(payload)=>{
    return {type:logsucc,payload}
}
export const loginfailure=()=>{
    return {type:logfail}
}


export const userlogin=(obj)=>(dispatch)=>{
    // console.log(obj)

    dispatch(loginrequest())
    return axios.post(`${mainapi}/user/login`,obj)
}