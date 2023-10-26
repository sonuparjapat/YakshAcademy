import { getadmininstsucc, getadminstudentfail, getadminstuntreq } from "./ActionTypes"

const initialdata={
    studentisLoading:false,
    studentisError:false,
    studentdata:[]
}

export const reducer =(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case getadminstuntreq:{
            return {...state,studentisLoading:true,studentisError:false,studentdata:[]}
        }
        case getadmininstsucc:{
            return {...state,studentisLoading:false,studentisError:false,studentdata:payload}
        }
        case getadminstudentfail:{
            return {...state,studentisLoading:false,studentisError:true,studentdata:[]}
        }
        default:{
            return state
        }
    }
}