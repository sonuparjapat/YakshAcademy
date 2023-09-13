import { updateinstprofilefail, updateinstprofilereq, updateinstprofilesucc } from "./ActionTypes"

const initialdata={
    updateinstisLoading:false,
    updateinstisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case updateinstprofilereq:{
            return {...state,updateinstisLoading:true,updateinstisError:false}
        }
        case updateinstprofilesucc:{
            return {...state,updateinstisLoading:false,updateinstisError:false}
        }
        case updateinstprofilefail:{
            return {...state,updateinstisLoading:false,updateinstisError:true}
        }
        default:{
            return state
        }
    }
}