import { completassignreq, completeassignfail, completeassignsucc } from "./ActionTypes"

const initialdata={
    completeisLoading:false,
    completeisError:false,
    msg:""
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case completassignreq:{
            return {...state,completeisLoading:true,completeisError:false,msg:""}
        }
        case completeassignsucc:{
            return {...state,completeisLoading:false,completeisError:false,msg:payload} 
        }
        case completeassignfail:{
            return {...state,completeisLoading:false,completeisError:true,msg:""} 
        }
        default:{
            return state
        }
    }
}