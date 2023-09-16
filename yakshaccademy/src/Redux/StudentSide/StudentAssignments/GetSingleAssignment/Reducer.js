import { studentsignleassignmentsuccess } from "./Action"
import { studentsingleassignfail, studentsingleassignreq, studentsingleassignsucc } from "./ActionTypes"

const initialdata={
    singleisLoading:false,
    singleisError:false,
    data:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case studentsingleassignreq:{
            return {...state,singleisLoading:true,singleisError:false,data:[]}
        }
        case studentsingleassignsucc:{
            return {...state,singleisLoading:false,singleisError:false,data:payload}
        }
        case studentsingleassignfail:{
            return {...state,singleisLoading:false,singleisError:true,data:[]}
        }
        default:{
            return state
        }
    }
}