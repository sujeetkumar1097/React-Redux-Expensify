import React from 'react'
import {connect} from 'react-redux'
import ExpenseFilter from '../selectors/ExpenseFilter'
import ExpenseTotal from '../selectors/ExpenseTotal'
import numeral from 'numeral'

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'
    const formattedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00')
    
    return (
        <div>
            <h1>
                Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
            </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = ExpenseFilter(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: ExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)