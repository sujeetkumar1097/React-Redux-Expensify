import {addExpense, removeExpense, editExpense} from '../../actions/Expenses'

test('for delete expense', () => {
    const action = removeExpense({id: '123asd'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123asd'
    })
})
test('edit expense', () =>{
    const action = editExpense('123asd', {note: 'new note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asd',
        updates: {
            note:'new note'
        }
    })
})
// test('add expense with provided value', () => {
//     const expenseData = {
//         description: 'rent',
//         amount: 1095,
//         createdAt: 1000,
//         note: 'last month expense'
//     }
//     const action = addExpense(expenseData)
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id:expect.any(String)
//         }
//     })

// })
test('add expense with default value', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})