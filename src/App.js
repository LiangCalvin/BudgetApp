import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/TransacComp";
import Hello from "./components/HelloComp"; // Import your component
import FormComp from "./components/FormComp";
import { useState, useEffect } from "react";
import { DataProvider } from "./data/DataContext"; // Import the DataProvider from DataContext
import ReportComponent from "./components/ReportComp";
import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Title = () => {
  return <h1>Budget App</h1>;
};

const Description = () => {
  return <h3>Details</h3>;
};

const initialState = {
  counter: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CLEAR":
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

function App() {
  const [datas, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const [showReport, setShowReport] = useState(true);
  const [state, dispatch] = useReducer(counterReducer, showReport);

  // Calculate total income and expense
  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    // Filter income and expense items
    const incomeItems = datas.filter((item) => item.price > 0);
    const expenseItems = datas.filter((item) => item.price < 0);
    // Calculate total income
    totalIncome = incomeItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);;

    // Calculate total expense
    totalExpense = (expenseItems.reduce((acc, curr) => acc + curr.price, 0) * -1).toFixed(2);
    // console.log("income = ", totalIncome);
    setReportIncome(totalIncome);
    setReportExpense(totalExpense);
    // console.log("total income=", totalIncome);
    // console.log("total exp=", totalExpense);
  }, [datas, reportIncome, reportExpense]);

  const addItem = (newItem) => {
    setItems([...datas, newItem]);
    // Update the reportIncome and reportExpense based on the type
    console.log("newItem from form", newItem);
  };

  const NewItem = (newitem) => {
    return;
  };

  const handleToggleReport = () => {
    if (showReport) {
      dispatch({ type: "HIDE" });
    } else {
      dispatch({ type: "SHOW" });
    }
    setShowReport(!showReport); // Toggle the showReport state
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <Router>
      <DataProvider>
        <div className="App">
          <header className="App-header">
            <div>
              <Title />
              <Hello />
              <div className="button-container">
                  <Link to="/balance" className="button-link">
                    Balance
                  </Link>
                  <Link to="/expense" className="button-link">
                    Add
                  </Link>
              </div>
              <Routes>
                <Route
                  path="/balance"
                  element={
                    showReport && (
                      <ReportComponent
                        totalIncome={reportIncome}
                        totalExpense={reportExpense}
                      />
                    )
                  }
                ></Route>
                <Route
                  path="/expense"
                  element={<FormComp AddItem={addItem} />}
                ></Route>
              </Routes>
              <button onClick={handleToggleReport}>
                {showReport ? "Hide" : "Show"} Report
              </button>
              {/* {showReport && (
                <ReportComponent
                  totalIncome={reportIncome}
                  totalExpense={reportExpense}
                />
              )} */}
              <Description AddnewItem={NewItem} />
              <Transaction datas={datas} />
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Please see detail in the link below:</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
