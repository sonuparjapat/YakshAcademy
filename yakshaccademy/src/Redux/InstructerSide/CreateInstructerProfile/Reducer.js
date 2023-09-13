import { createinstprofilefail, createinstprofilereq, createinstprofilesucc } from "./ActionTypes"

const initialdata={
    instisLoading:false,
    instisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case createinstprofilereq:{
            return {...state,instisLoading:true,instisError:false}
        }
        case createinstprofilesucc:{
            return {...state,instisLoading:false,instisError:false}
        }
        case createinstprofilefail:{
            return {...state,instisLoading:false,instisError:true}
        }
        default:{
            return state
        }
    }
}