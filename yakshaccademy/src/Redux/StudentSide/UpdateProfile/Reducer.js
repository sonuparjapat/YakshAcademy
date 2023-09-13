import { updatestudentprofilefail, updatestudentprofilereq, updatestudentprofilesucc } from "./ActionTypes"

const initialdata={
    updateisLoading:false,
    updateisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case updatestudentprofilereq:{
            return {...state,updateisLoading:true,updateisError:false}
        }
        case updatestudentprofilesucc:{
            return {...state,updateisError:false,updateisLoading:false}
        }
        case updatestudentprofilefail:{
            return {...state,updateisLoading:false,updateisError:true}
        }
        default:{
            return state
        }
    }
}