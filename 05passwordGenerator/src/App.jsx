import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //if num allowed
    if (numAllowed) str += "0123456789";
    
    //if char allowed
    if (numAllowed) str += "!@#$%^&*-()_+=[]{}~`";

    // now if I want to extract the values from these above variables I will run a loop. Loop will run to value of length.
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-4xl text-center'> Password Generator </h1>
      </div>
    </>
  )
}

export default App
