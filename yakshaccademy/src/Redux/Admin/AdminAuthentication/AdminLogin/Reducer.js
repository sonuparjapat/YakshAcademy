import { adminlogfail, adminlogreq, adminlogsucc } from "./ActionTypes"

const initialdata={
    logisLoading:false,
    logisError:false,
    adminname:"",
    adminemail:"",
    admintoken:"",
    adminId:""
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case adminlogreq:{
            return {...state,logisLoading:true,logisError:false,adminId:"",adminname:"",adminemail:"",admintoken:""}
        } 
        case adminlogsucc:{
            return {...state,logisLoading:false,logisError:false,adminId:payload.adminId,adminname:payload.adminname,adminemail:payload.adminemail,admintoken:payload.admintoken}
        }
        case adminlogfail:{
            return {...state,logisLoading:false,logisError:true,adminId:"",adminname:"",adminemail:"",admintoken:""}
        }
        default:{
            return state
        }
    }
}
