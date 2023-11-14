import React from "react";
import Table from './Table';
import Form from './Form';
import Transac from './Transac'
import '../App.css';

function App() {
  // code below displays all the data on the screen as the Parent Component
  return (
    <div className="App">
        <Transac />
        <Form />
        <Table />
    </div>
  );
}

export default App;
