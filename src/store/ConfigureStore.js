import { createStore, combineReducers } from "redux";
import ExpensesReducer from '../reducers/Expenses'
import FiltersReducers from '../reducers/Filters'

export default () => {
    const store = createStore(
        combineReducers({
             expenses: ExpensesReducer,
             filters: FiltersReducers
        }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}