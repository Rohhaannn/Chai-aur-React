import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //if num allowed
    if (numAllowed) str += "0123456789";

    //if char allowed
    if (numAllowed) str += "!@#$%^&*-()_+=[]{}~`";

    // now if I want to extract the values from these above variables I will run a loop. Loop will run to value of length.
    for (let i=0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center my-4'> Password Generator </h1>

        <div className='shadow rounded-lg overflow-hidden mb-4'> 
          <input type="text" value={password} className='outline-none bg-white w-full rounded-lg py-1 px-4 my-5 ' placeholder='Password'/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

              <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer my-5'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked = {numAllowed}
                id='numberInput'
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              /> 
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
