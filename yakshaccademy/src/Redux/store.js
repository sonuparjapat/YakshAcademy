import thunk from "redux-thunk";
// allreducers..................................

// StudentReducers
import {reducer as registerreducer} from "../Redux/Authentication/Register/Reducer"
import {reducer as loginreducer} from "../Redux/Authentication/Login/Reducer"
import {reducer as getstudentprofilereducer} from "../Redux/StudentSide/GetProfile/Reducer"
import {reducer as createstudentprofilereducer} from "../Redux/StudentSide/CreateProfile/Reducer"

import {reducer as updatestudentprofilereducer} from "../Redux/StudentSide/UpdateProfile/Reducer"


// instructerReducers
import {reducer as updateinstprofilereducer} from "./InstructerSide/UpdateInstructerProfile/Reducer"
import {reducer as createinstprofilereducer } from "./InstructerSide/CreateInstructerProfile/Reducer"
import {reducer as getinstprofilereducer} from "./InstructerSide/GetInstructerProfile/Reducer"
import {reducer as createassignmentreducer} from "./InstructerSide/CreateAssignments/Reducer"
import {reducer as instassignmentsreducer} from "./InstructerSide/AllAssignments/Reducer"
///////////////////////////////////////////////////////////////////////////
const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");





const rootreducers=combineReducers({registerreducer,loginreducer,getstudentprofilereducer,createstudentprofilereducer,updatestudentprofilereducer,
getinstprofilereducer,updateinstprofilereducer,createinstprofilereducer,createassignmentreducer,instassignmentsreducer})
export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))