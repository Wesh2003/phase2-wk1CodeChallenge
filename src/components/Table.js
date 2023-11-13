import useState from 'react';
import useEffect from 'react';
import React from "react";

function Table() {

    const [description, setDescription] = useState(null)
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')

  
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then(r => r.json())
        .then((data) => {
            setDescription(data.description);
            setDate(data.date);
            setCategory(data.category);
            setAmount(data.amount);
            
        })
     }, [])
  
    return (
    <div>
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
            </tr>
        </table>
    </div>
  );
}

export default Table