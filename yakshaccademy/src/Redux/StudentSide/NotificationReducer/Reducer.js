import { getnotfail, getnotreq, getnotsucc } from "./ActionTypes"

const initialdata={
    notisLoading:false,
    notisError:false,
    notdata:[]
}


export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
 case getnotreq:{
    return {...state,notisLoading:true,notisError:false,notdata:[]}
 }
 case getnotsucc:{
    return {...state,notisLoading:false,notisError:false,notdata:payload}
 }
 case getnotfail:{
    return {...state,notisLoading:false,notisError:true,notdata:[]}
 }
 default:{
    return state
 }
    }
}