import { regfail, regreq, regsucc } from "./ActionTypes"


const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case regreq:{
            return {...state,isLoading:true,isError:false}
        }
        case regsucc:{
            return {...state,isLoading:false,isError:false}

        }
        case regfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}