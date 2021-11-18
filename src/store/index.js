import { applyMiddleware,combineReducers, createStore } from "redux";
import { dataReducer } from "./dataReducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const rootReducer = combineReducers({
    data: dataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))