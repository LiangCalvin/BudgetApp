import logo from './logo.svg';
import './App.css';
import Transaction from './components/TransacComp';
import Hello from './components/HelloComp'; // Import your component
import TodoApp from './components/TodoApp'; // Import the TodoApp component
import FormComp from './components/FormComp';
import { useState } from 'react';


const Title = ()=>{
  return <h1>Program</h1>
}

const Description = ()=>{
  return (
   <h3>Description</h3>
  )
}

function App() {
  const [datas, setItems] = useState([]);

  const addItem = (newItem)=>{
    setItems([...datas, newItem]);
    console.log("newItem from form",newItem);
  }

  // const data = [
  //   { name: "Gas", price: 1000 },
  //   { name: "Tuition", price: 10000 },
  //   { name: "Food", price: 5000 },
  //   { name: "Merit", price:300},
  // ];
  const NewItem =(newitem) =>{
    return 
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <div>
            <Title/>
            <Hello />
            <FormComp AddItem={addItem}/>
            <Description AddnewItem={NewItem} />
            <Transaction datas={datas} />
            <TodoApp/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please see detail in the link below:
        </p>
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
  );
}

export default App;
