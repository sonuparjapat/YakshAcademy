import { editassignmentfail, editassignmentreq, editassignmentsucc } from "./ActionTypes"

const initialdata={
    editisLoading:false,
    editisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case editassignmentreq:{
            return {...state,editisLoading:true,editisError:false}
        }
        case editassignmentsucc:{
            return {...state,editisLoading:false,editisError:false}
        }
        case editassignmentfail:{
            return {...state,editisLoading:false,editisError:true}
        }
        default:{
            return state
        }
    }
}