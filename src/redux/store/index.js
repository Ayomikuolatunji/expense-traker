import {createStore,combineReducers} from "redux"
import {expensesReducer} from "../reducers/expenses"

const reducer=combineReducers({
    expenses:expensesReducer
})
const initialState={}
const store=createStore(reducer,initialState);

export default store