import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk }  from 'redux-thunk'
import { reducer as newProjectReducer } from "../NewProjectReducer/reducer";
import { reducer as allProjectReducer } from "../AllProjectReducer/reducer";
import { reducer as MoreProjectReducer } from "../MoreProjectReducer/reducer";
const rootReducer = combineReducers({
    newProjectReducer,
    allProjectReducer,
    MoreProjectReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))