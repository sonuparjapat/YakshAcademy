import { adminlogfail, adminlogreq, adminlogsucc } from "./ActionTypes"

const initialdata={
    logisLoading:false,
    logisError:false,
    adminname:"",
    adminemail:"",
    admintoken:"",
    adminId:"",
    alldata:0,
    studentscount:0,
    instructerscount:0,
    frontendinstructerscount:0,
    backendinstructerscount:0,
    fullstackinstructerscount:0,
    frontendstudentscount:0,
    backendstudentscount:0,
    fullstackstudentscount:0,
    students:[],
    instructer:[],
    frontendstudents:[],
    backendstudents:[],
    fullstackstudents:[],
    frontendinstructers:[],
    backendinstructers:[],
    fullstackinstructers:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case adminlogreq:{
            return {...state,logisLoading:true,logisError:false,adminId:"",adminname:"",adminemail:"",admintoken:"",alldata:0
        , studentscount:0,
        instructerscount:0,
        frontendinstructerscount:0,
        backendinstructerscount:0,
        fullstackinstructerscount:0,
        frontendstudentscount:0,
        backendstudentscount:0,
        fullstackstudentscount:0,
        students:[],
        instructer:[],
        frontendstudents:[],
        backendstudents:[],
        fullstackstudents:[],
        frontendinstructers:[],
        backendinstructers:[],
        fullstackinstructers:[]}
        } 
        case adminlogsucc:{
            return {...state,logisLoading:false,logisError:false,alldata:payload.alldata,adminId:payload.adminId,adminname:payload.adminname,adminemail:payload.adminemail,admintoken:payload.admintoken,
                studentscount:payload.studentscount,
                instructerscount:payload.instructerscount,
                frontendinstructerscount:payload.frontendinstructerscount,
                backendinstructerscount:payload.backendinstructerscount,
                fullstackinstructerscount:payload.fullstackinstructerscount,
                frontendstudentscount:payload.frontendstudentscount,
                backendstudentscount:payload.backendstudentscount,
                fullstackstudentscount:payload.fullstackstudentscount,
                students:payload.students,
                instructer:payload.instructer,
                frontendstudents:payload.frontendstudents,
                backendstudents:payload.backendstudents,
                fullstackstudents:payload.fullstackstudents,
                frontendinstructers:payload.frontendinstructers,
                backendinstructers:payload.backendinstructers,
                fullstackinstructers:payload.fullstackinstructers }
        }
        case adminlogfail:{
            return {...state,logisLoading:false,logisError:true,alldata:0,adminId:"",adminname:"",adminemail:"",admintoken:"",
            studentscount:0,
            instructerscount:0,
            frontendinstructerscount:0,
            backendinstructerscount:0,
            fullstackinstructerscount:0,
            frontendstudentscount:0,
            backendstudentscount:0,
            fullstackstudentscount:0,
            students:[],
            instructer:[],
            frontendstudents:[],
            backendstudents:[],
            fullstackstudents:[],
            frontendinstructers:[],
            backendinstructers:[],
            fullstackinstructers:[] }
        }
        default:{
            return state
        }
    }
}


// res.status(200).json({msg:"Login Successfully",adminname:admindata.name,adminemail:admindata.email,admintoken:token,adminId:admindata.Id,
// alldata:alldata.length,"studentscount":students.length,instructerscount:instructer.length,"frontendstudentscount":frontendstudents.length,backendstudentscount:backendstudents.length,fullstackstudentscount:fullstackstudents.length,
// frontendinstructerscount:frontendinstructers.length,backendinstructerscount:backendinstructers.length,fullstackinstructerscount:fullstackinstructers.length,
// students,instructer,frontendinstructers,backendinstructers,fullstackinstructers,frontendstudents,backendstudents,fullstackstudents})