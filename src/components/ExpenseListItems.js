import React from 'react';
import {NavLink} from 'react-router-dom'
 
const ExpenseListItems = ({ id, description, amount, createdAt}) => {
    console.log("this is expense: obj ==>>",id);
    return (
        <div>
            <NavLink to={`/edit/${id}`}>
                <h1>{description}</h1>
            </NavLink>
            <p>{amount} - {createdAt}</p>
        </div>
    )
}
export default ExpenseListItems

