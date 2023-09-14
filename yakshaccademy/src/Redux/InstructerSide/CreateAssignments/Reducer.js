import { createassignmentfail, createassignmentreq, createassignmentsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case createassignmentreq:{
            return {...state,isLoading:true,isError:false}
        }
        case createassignmentsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case createassignmentfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }

}