import { countsucc } from "./ActionTypes"

export const countsuccess=()=>{
    return {type:countsucc}
}
export const countvalue=(dispatch)=>{
    dispatch(countsuccess())
}