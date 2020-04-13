const expensesReducerDefaultState = []

// export default (state =expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return Object.assign(...state, [action.expense]);
//         case 'REMOVE_EXPENSE':
//             return state.filter(expense => expense.id != action.id);
//         case 'EDIT_EXPENSE':
//             return state.map(expense => {
//                 if(expense.id === action.id) {
//                      return Object.assign(...state, {expense});
                    
//                 } else {
//                     return expense;
//                 }
//             });
//         default:
//             return state;
//     }
// }

export default (state =expensesReducerDefaultState, action) => {
    console.log('INSIDE REDUCER', action)
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id != action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id) {
                    console.log('EDIT_EXPENSE', action)
                    //const c =action.updates
                    return  action.updates
                    //  return {
                    //      ...expense,
                    //      ...action.updates
                    //  };  
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

//export default expensesReducer