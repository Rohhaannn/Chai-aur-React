import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "Rohan",
  //   age: 25
  // }

  // let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-8 rounded-xl mb-4'> Tailwind Test </h1>

      {/* <Card username="Rohan" someObject={myObj} newObj={newArr}/> */}
      <Card username="Rohan" btnText="Click Me"/>
      <Card username="Ronak" btnText="Hit it"/>

    </>
  )
}

export default App
