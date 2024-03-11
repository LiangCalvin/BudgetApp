import React from "react";
import "../styles/ReportComp.css"; // Import your CSS file for custom styles

function ReportComponent({ totalIncome, totalExpense }) {
    const balance = totalIncome - totalExpense;
  return (
    <div className="report-container">
    <h4 className="balance">Balance: {balance}</h4>
    <div className="report-details">
      <div className="income">
        <p>Income</p>
        <p>{totalIncome}</p>
      </div>
      <div className="expense">
        <p>Expense</p>
        <p>{totalExpense}</p>
      </div>
    </div>
  </div>
  );
}

export default ReportComponent;
