import { deleteassignmentfail, deleteassignmentreq, deleteassignmentsucc } from "./ActionTypes"

const initialdata={
    deleteisLoading:false,
    deleteisError:false

}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deleteassignmentreq:{
            return {...state,deleteisLoading:true,deleteisError:false}
        } 
        case deleteassignmentsucc:{
            return {...state,deleteisLoading:false,deleteisError:false}
        }
        case deleteassignmentfail:{
            return {...state,deleteisLoading:false,deleteisError:true}
        }
        default:{
            return state
        }
    }
}