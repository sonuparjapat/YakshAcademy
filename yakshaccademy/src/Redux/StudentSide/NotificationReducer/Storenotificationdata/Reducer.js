import { storenotdata } from "./ActionTypes"


const initialdata={
    data:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case storenotdata:{
            return {...state,data:payload}
        }
        default:{
            return state
        }
    }
}