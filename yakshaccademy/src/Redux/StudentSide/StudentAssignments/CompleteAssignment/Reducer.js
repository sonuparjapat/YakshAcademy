import { completassignreq, completeassignfail, completeassignsucc } from "./ActionTypes"

const initialdata={
    completeisLoading:false,
    completeisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case completassignreq:{
            return {...state,completeisLoading:true,completeisError:false}
        }
        case completeassignsucc:{
            return {...state,completeisLoading:false,completeisError:false} 
        }
        case completeassignfail:{
            return {...state,completeisLoading:false,completeisError:true} 
        }
        default:{
            return state
        }
    }
}