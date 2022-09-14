import {createStore, combineReducers} from "redux";
import {reducer} from "./gameReducer";
import {historyReducer} from "./historyReducer";

const rootReducer = combineReducers({
    board: reducer,
    history: historyReducer,
})
export const store = createStore(rootReducer)