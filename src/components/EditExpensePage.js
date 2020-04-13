import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/Expenses'

export class EditExpensePage extends React.Component {
    onSubmit= (expense) =>{
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }
    render() {
        return(
        <div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>REMOVE</button>
        </div>            
        )
    }
}

// const EditExpensePage = (props) => {
//     console.log('EditExpensePage',props)
//     console.log('EditExpensePage  ID:',props.expense.id)
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense))
//                     props.history.push('/')
//                 }}
//             />
//             <button onClick={(e) => {
//                props.dispatch(removeExpense({id:props.expense.id})) 
//                props.history.push('/')
//             }}>REMOVE</button>
//         </div>)
// }
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)