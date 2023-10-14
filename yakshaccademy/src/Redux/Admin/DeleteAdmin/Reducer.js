import { deleteadminfail, deleteadminreq, deleteadminsucc } from "./ActionTypes"

const initialdata={
    deleteadminisLoading:false,
    deleteadminisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deleteadminreq:{
            return {...state,deleteadminisLoading:true,deleteadminisError:false}
        }
        case deleteadminsucc:{
            return {...state,deleteadminisLoading:false,deleteadminisError:false}
        }
        case deleteadminfail:{
            return {...state,deleteadminisLoading:false,deleteadminisError:true}
        }
        default:{
            return state
        }
    }
}