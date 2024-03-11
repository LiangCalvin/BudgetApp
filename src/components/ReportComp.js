import React from "react";
import "../styles/ReportComp.css"; // Import your CSS file for custom styles

function formatNumber(number) {
  return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
  });
}
function ReportComponent({ totalIncome, totalExpense }) {
   // Convert totalIncome and totalExpense to numbers
   totalIncome = parseFloat(totalIncome);
   totalExpense = parseFloat(totalExpense);
    const balance = totalIncome - totalExpense;
  return (
    <div className="report-container">
    <h4 className="balance">Balance: {formatNumber(balance)} ฿ </h4>
    <div className="report-details">
      <div className="income">
        <p>Income</p>
        <p>฿ {formatNumber(totalIncome)}</p>
      </div>
      <div className="expense">
        <p>Expense</p>
        <p>฿ {formatNumber(totalExpense)}</p>
      </div>
    </div>
  </div>
  );
}

export default ReportComponent;
