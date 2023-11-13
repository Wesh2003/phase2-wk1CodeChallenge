import useState from 'react';
import React from "react";

function Form() {
    const [description, setDescription] = useState(null)
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')

    function duringSubmition(event) {
        event.preventDefault();
        const formData = { 
        date,
        escription,
        category,
        amount,
        }
        console.log(formData);
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

export default Form