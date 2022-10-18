import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import thunk from "redux-thunk"
import {reducer as Cartreducer} from "./reducer"

const rootReducer = combineReducers({
   Cartreducer
});

export const store=legacy_createStore(
rootReducer,applyMiddleware(thunk)
)