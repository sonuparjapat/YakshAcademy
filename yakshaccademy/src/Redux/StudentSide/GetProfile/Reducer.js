import { getstudentprofilefail, getstudentprofilereq, getstudentprofilesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getstudentprofilereq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case getstudentprofilesucc:{
            return {...state,isLoading:false,isError:false,data:payload.msg}
        }
        case getstudentprofilefail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default :{
            return state
        }
         
        
    }
}