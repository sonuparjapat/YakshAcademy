import { getsinglenotfail, getsinglenotreq, getsinglenotsucc } from "./ActionTypes"

const initialdata={
    notisLoading:false,
    notisError:false,
    noti:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
switch(type){
    case getsinglenotreq:{
return {...state,notisLoading:true,notisError:false,noti:[]}
    }
    case getsinglenotsucc:{
        return {...state,notisLoading:false,notisError:false,noti:payload}
    }
    case getsinglenotfail:{
        return {...state,notisLoading:false,notisError:true,noti:[]}
    }
    default:{
        return state
    }
}
}