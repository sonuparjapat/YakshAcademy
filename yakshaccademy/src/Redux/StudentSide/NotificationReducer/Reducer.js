import { countsucc } from "./ActionTypes"

const initialdata={
    count:0
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case countsucc:{
            return {...state,count:state.count+1}
        }
        default:{
            return state
        }
    }
}