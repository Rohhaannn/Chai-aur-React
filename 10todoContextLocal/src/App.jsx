import React, { useEffect, useState } from "react";
import {TodoProvider} from './contexts'
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos(todo) // not recommended: bcz this will replace all old todo values with new one 
    setTodos(oldTodo => [{id:Date.now(), ...todo}, ...oldTodo])
  }

  
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // prev.map((eachVal) => {
    //   if (eachVal.id === id) {
    //     todo
    //   } else {
    //     eachVal
    //   }
    // })
  }


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  const toggleComplete = (id) => {
    // console.log('toggle working')
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // basic functionality ended here 39:50 ;


  //========================================================================================================

  // if we want, when or page gets loaded, some todos should be present there, and those are todos are saved localStorage
  // so when our page gets loaded for the first time we need a function that takes those values (todos) from localStorage and display us
  // thats why we are using useEffect hook here.
  
  useEffect(() => {
    //localStorage.getItem("todos") // this will give us String values
  
    const todos = JSON.parse(localStorage.getItem("todos")) // but this JSON.parse() will give us direct JavaScript
    
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


    //from Bard
  // useEffect(() => {
  //   const storedTodos = localStorage.getItem("todos");
  //   try {
  //     const todos = storedTodos ? JSON.parse(storedTodos) : []; // Parse only if data exists
  //     if (todos.length > 0) {
  //       setTodos(todos);
  //     }
  //   } catch (error) {
  //     console.error("Error parsing todos from localStorage:", error);
  //     // Handle the error gracefully, e.g., setTodos([]) to clear the state
  //   }
  // }, []);

  //from chatGPT
  // useEffect(() => {
  //   // Retrieve the value from localStorage
  //   const storedTodos = localStorage.getItem("todos");
  
  //   // Check if the value is not null or an empty string
  //   if (storedTodos && storedTodos.length > 0) {
  //     // Parse the JSON string and update the state
  //     const todos = JSON.parse(storedTodos);
  //     setTodos(todos);
  //   }
  // }, []);
  
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className="w-full"
              >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
