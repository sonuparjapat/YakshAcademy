import { logfail, logreq, logsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    type:"",
    token:"",
    username:"",
    useremail:"",
    field:""
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case logreq:{
            return {...state,isLoading:true,isError:false,type:"",token:"",username:"",useremail:"",field:""}
        }
        case logsucc:{
            return {...state,isLoading:false,isError:false,type:payload.type,token:payload.token,username:payload.username,useremail:payload.useremail,field:payload.field}
        }
        case logfail:{
            return {...state,isLoading:false,isError:true,type:"",token:"",username:"",useremail:"",field:""}
        }
        default:{
            return state
        }
    }
}