import thunk from "redux-thunk";
// allreducers..................................
import {reducer as registerreducer} from "../Redux/Authentication/Register/Reducer"
import {reducer as loginreducer} from "../Redux/Authentication/Login/Reducer"








///////////////////////////////////////////////////////////////////////////
const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");





const rootreducers=combineReducers({registerreducer,loginreducer})
export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))