import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import {Provider} from 'react-redux'
import ConfigureStore from './store/ConfigureStore'
import {addExpense} from './actions/Expenses'
import {setTextFilter} from './actions/Filters'
import getExpenseFilter from './selectors/ExpenseFilter'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'


const store = ConfigureStore();

// store.dispatch(addExpense({description:'water bill', amount: 4500}))
// store.dispatch(addExpense({description:'rent', amount:95000}))
// store.dispatch(addExpense({description:'gas bill', createdAt: 1000}))
// store.dispatch(setTextFilter('bill'))

const state = store.getState()
const expenseFilter = getExpenseFilter(state.expenses, state.filters)
//console.log("expenseFilter ==>>", expenseFilter)

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'))
console.log("app.js running")
