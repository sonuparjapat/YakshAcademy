import { instassignmentfail, instassignmentreq, instassignmentsucc } from "./ActionTypes"

const  initialdata={
    isLoading:false,
    isError:false,
    data:[],
    totalcount:0



}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case instassignmentreq:{
            return {...state,isLoading:true,isError:false,data:[],totalcount:0}
        }
        case instassignmentsucc:{
            return {...state,isLoading:false,isError:false,data:payload.msg,totalcount:payload.totalpages}
        }
        case instassignmentfail:{
            return {...state,isLoading:false,isError:true,data:[],totalcount:0}
        }
        default:{
            return state
        }
    }
}