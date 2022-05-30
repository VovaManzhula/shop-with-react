import { combineReducers } from "redux";
import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";





const rootReducer = combineReducers({ postReducer,commentReducer });
export default rootReducer;
