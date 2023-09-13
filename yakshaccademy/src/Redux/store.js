import thunk from "redux-thunk";
// allreducers..................................
import {reducer as registerreducer} from "../Redux/Authentication/Register/Reducer"
import {reducer as loginreducer} from "../Redux/Authentication/Login/Reducer"
import {reducer as getstudentprofilereducer} from "../Redux/StudentSide/GetProfile/Reducer"
import {reducer as createstudentprofilereducer} from "../Redux/StudentSide/CreateProfile/Reducer"

import {reducer as updatestudentprofilereducer} from "../Redux/StudentSide/UpdateProfile/Reducer"





///////////////////////////////////////////////////////////////////////////
const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");





const rootreducers=combineReducers({registerreducer,loginreducer,getstudentprofilereducer,createstudentprofilereducer,updatestudentprofilereducer})
export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))