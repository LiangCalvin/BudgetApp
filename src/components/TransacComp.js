import React from "react";
import Item from "./ItemComp";
import "../styles/Transaction.css";
import { v4 as uuidv4 } from "uuid";

function Transaction({ datas }) {
  // Reverse the order of the datas array
  const reversedDatas = datas.slice().reverse();
  return (
    <>
      <div className="transaction">
      {reversedDatas.map((element, index) => (
          <Item key={uuidv4()} name={element.name} price={element.price} />
        ))}
      </div>
      <div>
      </div>
    </>
  );
}
export default Transaction;
