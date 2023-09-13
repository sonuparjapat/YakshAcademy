import { createstudentprofilefail, createstudentprofilereq, createstudentprofilesucc } from "./ActionTypes"

const initialdata={
    createisLoading:false,
    createisError:false
}


export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case createstudentprofilereq:{
            return {...state,createisLoading:true,createisError:false}
        }
        case createstudentprofilesucc:{
            return {...state,createisLoading:false,createisError:false}
        }
        case createstudentprofilefail:{
            return {...state,createisLoading:false,createisError:true}
        }
        default:{
            return state
        }
    }
}