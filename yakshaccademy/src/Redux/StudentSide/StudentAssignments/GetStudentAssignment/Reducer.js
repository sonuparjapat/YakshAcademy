import { getstudentassignmentfail, getstudentassignmentreq, getstudentassignmentsucc } from "./ActionTypes"


const initialdata={
    getisLoading:false,
    getisError:false,
    assignments:[],
    totalcount:0
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getstudentassignmentreq:{
            return {...state,getisLoading:true,getisError:false,assignments:[],totalcount:0}
        }
        case getstudentassignmentsucc:{
            return {...state,getisLoading:false,getisError:false,assignments:payload.msg,totalcount:payload.totalpages}
        }
        case getstudentassignmentfail:{
            return {...state,getisLoading:false,getisError:true,assignments:[],totalcount:0}

        }
        default:{
            return {state}
        }
    }
}