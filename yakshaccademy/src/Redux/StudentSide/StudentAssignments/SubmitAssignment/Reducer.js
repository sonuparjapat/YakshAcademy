import { submitsdtassignfail, submitsdtassignsucc, submitstudentassignreq } from "./ActionTypes"

const initialdata={
    submitisLoading:false,
    submitisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case submitstudentassignreq:{
            return {...state,submitisLoading:true,submitisError:false}
        }
        case submitsdtassignsucc:{
            return {...state,submitisLoading:false,submitisError:false}
        }
        case submitsdtassignfail:{
            return {...state,submitisLoading:false,submitisError:true}
        }
        default:{
            return state
        }
    }
}