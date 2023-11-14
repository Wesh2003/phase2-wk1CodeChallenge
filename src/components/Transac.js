import { useState } from 'react';
import React from "react";

function Transac() {
    // code below finds the transcation from the database and displays it on the screen

    const [find, setFind] = useState([])

    function findTrans(event) {
        event.preventDefault();
        setFind(event.target[0].value)
    }

    return (
        <div>
            <form action="http://localhost:3000/transactions" method = 'GET' onSubmit={findTrans}>
            <input type="text" placeholder="Search Transcations" name="search" />
            <button type="submit"> Search Transaction</button>
            </form>


        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>

                {
                    find.map((trans) => (
                        <tr key = {trans.id}>
                            <td>{trans.date}</td>
                            <td>{trans.description}</td>
                            <td>{trans.category}</td>
                            <td>{trans.amount}</td>
                            <button onClick = {() => deleteTrans(trans.id)} >Delete trans</button>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>

        
    );



}

export default Transac;



