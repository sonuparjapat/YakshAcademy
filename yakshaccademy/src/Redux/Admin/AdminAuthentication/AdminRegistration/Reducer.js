import { adminregfail, adminregreq, adminregsucc } from "./ActionTypes"

const initialdata={
    adminregisLoading:false,
    adminregisError:false
}

export const reducer =(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case adminregreq:{
            return {...state,adminregisLoading:true,adminregisError:false}
        }
        case adminregsucc:{
            return {...state,adminregisError:false,adminregisLoading:false}
        }
        case adminregfail:{
            return {...state,adminregisLoading:false,adminregisError:true}
        }
        default:{
            return state
        }
    }
}