import React from 'react';
import Item from "./ItemComp";
import "../styles/Transaction.css";
import { v4 as uuidv4 } from 'uuid';

function Transaction({datas}) {
  return (
    <div className="transaction">
      {datas.map((element, index) => (
        <Item key={uuidv4()} name={element.name} price={element.price}  />
      ))}
    </div>
  );
}
export default Transaction;
