import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItems'
import ExpenseFilter from '../selectors/ExpenseFilter'

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {/* {props.filters.text}
        {props.expenses.length} */}
        {props.expenses.length === 0 ? (<h1>No Expense Added Yet</h1>): 
        (props.expenses.map(expense => (<ExpenseListItem key={expense.id} {...expense}/>)))}
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: ExpenseFilter(state.expenses,state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)