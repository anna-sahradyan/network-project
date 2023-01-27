import {combineReducers} from "redux";
import auth from "../redux/authSlice.js";

const rootReducer = combineReducers({
    auth,
    devTools: true
});
export default rootReducer;
