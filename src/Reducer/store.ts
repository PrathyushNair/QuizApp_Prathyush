import{legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { Reducer } from "./Reducer"
export type AppDispatch=typeof store.dispatch
export const store=legacy_createStore(Reducer,applyMiddleware(thunk))