import { useState } from 'react';
import { useEffect }from 'react';
import React from "react";

function Table() {

    const [dataa, setDataa] = useState([]);

  
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then(r => r.json())
        .then(data => setDataa(data))
     }, [])
  
    return (
    <div>
        <table>

            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>

                {
                    dataa.map((trans) => (
                        <tr key = {trans.id}>
                            <td>{trans.date}</td>
                            <td>{trans.description}</td>
                            <td>{trans.category}</td>
                            <td>{trans.amount}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  );
}

export default Table