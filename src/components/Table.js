import useState from 'react';
import useEffect from 'react';
import React from "react";

function Table() {

    /*
    const [description, setDescription] = useState(null)
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    */
    const [dataa, setDataa] = useState([])

  
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then(r => r.json())
        .then((data) => {
            setDataa(data)
            /*
            setDescription(data.description);
            setDate(data.date);
            setCategory(data.category);
            setAmount(data.amount);
            */
            
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
            <tbody>
                {
                    dataa.map((trans) => {
                        return <tr key = {trans.id}>
                            <td>{trans.date}</td>
                            <td>{trans.description}</td>
                            <td>{trans.category}</td>
                            <td>{trans.amount}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  );
}

export default Table