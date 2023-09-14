import { instassignmentfail, instassignmentreq, instassignmentsucc } from "./ActionTypes"

const  initialdata={
    isLoading:false,
    isError:false,
    data:[]



}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case instassignmentreq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case instassignmentsucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case instassignmentfail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}