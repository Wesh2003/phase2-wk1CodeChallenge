import { useState } from 'react';
import React from "react";
import { dataa, setDataa } from './Table';

function Form() {
    // code below displays the form in which one can add a new transcation

    
    const [description, setDescription] = useState(null)
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')

    function duringSubmition(event) {
        event.preventDefault();

        const newTrans = { 
        date: date,
        description: description,
        category: category,
        amount: amount
        };

        const updatedTrans = [...dataa, newTrans]; 

        setDataa(updatedTrans)


    }

    // function below deletes the transaction selected by the delete button in Table.js
    function deleteTrans(id) {
        const updatedTrans = dataa.filter(dataa => dataa.id !== id)
        setDataa(updatedTrans)
    }
    

    return (
        <form onSubmit={duringSubmition}>
        <h1>Input New Transcation</h1>
        <label>Date</label>
        <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />

        <label>Description</label>
        <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />

        <label>Category</label>
        <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />

        <label>Amount</label>
        <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />

        <input type="submit" value="New Transaction" />
        </form>
    );
}

export {deleteTrans}
export default Form