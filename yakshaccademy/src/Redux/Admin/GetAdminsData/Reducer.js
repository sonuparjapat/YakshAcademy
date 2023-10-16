import { getadmindatafail, getadmindatareq, getadmindatasucc } from "./ActionTypes"

const initialdata={
    admindataisLoading:false,
    admindataisError:false,
    alltypedata:[]
}


export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getadmindatareq:{
            return {...state,admindataisError:false,admindataisLoading:true,alltypedata:[]}
        }
        case getadmindatasucc:{
            return {...state,admindataisLoading:false,admindataisError:false,alltypedata:payload}
        }
        case getadmindatafail:{
            return {...state,admindataisLoading:false,admindataisError:true,alltypedata:[]}
        }
        default:{
            return state
        }
    }
}