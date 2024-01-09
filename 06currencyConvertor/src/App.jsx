import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3x1 bg-orange-500 px-4 py-2 w-full'> Currency Convertor App with Chai</h1>
    </>
  )
}

export default App
