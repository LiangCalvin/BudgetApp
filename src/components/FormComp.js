import React from "react";
import "../styles/FormComp.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function FormComp({AddItem}) {
  const [title, setItem] = useState("");
  const [amount, setAmount] = useState('');

  const handleItemChange = (event) => {
    setItem(event.target.value); // Update item state when input value changes
  };
  const handleAmountChange = (event) => {
    const value = parseFloat(event.target.value);
    setAmount(value);
  };
  const handleAddTodo=()=>{
    console.log('Button clicked!');
    const item = {
        id:uuidv4(),
        name:title,
        price:amount
    };
    console.log('New Item:', item);
    AddItem(item)
    setItem('');
    setAmount('');
}

  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor="item">Item</label>
        <input type="text" id="item" onChange={handleItemChange} value={title} />
      </div>

      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" onChange={handleAmountChange} value={amount} />
      </div>
      <button onClick={handleAddTodo} type="button">Submit</button>
    </div>
  );
}

export default FormComp;
