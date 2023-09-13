import { getinstprofilefail, getinstprofilereq, getinstprofilesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getinstprofilereq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case getinstprofilesucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case getinstprofilefail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}