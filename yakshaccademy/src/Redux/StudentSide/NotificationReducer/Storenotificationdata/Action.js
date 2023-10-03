import { storenotdata } from "./ActionTypes"

export const storenoti=()=>{
    return {type:storenotdata}
}

export const storenotifications=(data)=>(dispatch)=>{
    dispatch(storenoti(data))
}