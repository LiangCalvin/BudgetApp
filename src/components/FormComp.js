import React from "react";
import "../styles/FormComp.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; // Import PropTypes module

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
    if (!title.trim() || !amount || isNaN(amount) || parseFloat(amount) === 0) {
      alert("Please enter a valid item and amount.");
      return;
    }
    console.log('Button clicked!');
    const item = {
        id:uuidv4(),
        name:title,
        price:parseFloat(amount)
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
          <input type="text" id="item" onChange={handleItemChange} value={title} placeholder="please insert detail" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={handleAmountChange} value={amount} placeholder="please insert amount" />
        </div>
      <button onClick={handleAddTodo} type="button">Add</button>
    </div>
  );
}

FormComp.propTypes = {
  AddItem: PropTypes.func.isRequired, // AddItem prop is required and must be a function
};


export default FormComp;
