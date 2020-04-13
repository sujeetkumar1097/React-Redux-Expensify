import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../Fixtures/Expenses'
import { shallow } from 'enzyme'
import React from 'react'

let editExpense, removeExpense,history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(
        <EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history = {history}
        expense = {expenses[2]}
        />)
})

test('render Edit Expense Page', () => {
    expect(wrapper).toMatchSnapshot()
})
test('handle Edit Expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2])

})
test('handle remove Expense ', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith({
        id: expenses[2].id
    })
})