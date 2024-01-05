import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  

  // let counter = 5;

  const addValue = () => {
    // let count = counter + 1;
    // console.log("value changed", count);
    // setCounter(counter + 1);

    if(counter >= 20) {
      alert("You cannot increase value greater than 20");
    } else {
      setCounter(counter + 1);
    }
    
  }


  const removeValue = () => {
    // setCounter(counter - 1);
    if(counter <= 0) {
      alert("You cannot decrease value less than 0");
    } else {
      setCounter(counter - 1);
    }
  }


  return (
    <>

      <h1> Chai aur Code </h1>
      <h2> Counter Value : {counter} </h2>

      <button onClick={addValue}> Add Value </button>
      <button onClick={removeValue}> remove Value </button>

    </>
  )
}

export default App
