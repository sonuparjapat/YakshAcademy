import axios from "axios"
import { regfail, regreq, regsucc } from "./ActionTypes"
import { mainapi } from "../../Api/mainapi"


export const registerrequest=()=>{
    return {type:regreq}
}
export const registersuccess=()=>{
    return {type:regsucc}
}
export const registerfailure=()=>{
    return {type:regfail}
}

// registration from admin side
export const userregister=(obj)=>(dispatch)=>{
   
    dispatch(registerrequest())

    return axios.post(`${mainapi}/admin/user/register`,obj)

}