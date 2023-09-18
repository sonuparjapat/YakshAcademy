import { getsubmittedassignfail, getsubmittedassignreq, getsubmittedassignsucc } from "./ActtionTypes"

const initialdata={
    issubmit:"",
    getsubassignloading:false,
    getsubassigneror:false
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getsubmittedassignreq:{
            return {...state,issubmit:"",getsubassignloading:true,getsubassigneror:false}
        }
        case getsubmittedassignsucc:{
            return {...state,issubmit:payload,getsubassignloading:false,getsubassigneror:false}
        }
        case getsubmittedassignfail:{
            return {...state,issubmit:"",getsubassignloading:false,getsubassigneror:true}
        }
        default:{
            return state
        }
    }
}