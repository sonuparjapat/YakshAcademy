import { getsignleassignmentfail, getsignleassignmentreq, getsingleassignmentsucc } from "./ActionTypes";

const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type) {
        case getsignleassignmentreq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case getsingleassignmentsucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case getsignleassignmentfail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
            
         
    
        default:{
            return state
        }
           
    }
}


