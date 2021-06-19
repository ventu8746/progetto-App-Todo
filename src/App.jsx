import React, { useState } from 'react'
import './App.css'

/**
 * 
 * @param {Array<{text: string, completed: boolean}>} arr 
 * @param {string} string 
 * @returns {Array<{text: string, completed: boolean}>}s
 */
function addItem(arr, string) {
  if (string === "") {
    return arr;
  }
  return arr.concat([
    {
      todo: string,
      completed: false,
    },
  ]);
}

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [inputText,setInput] = useState('')
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>App Todo By Marco Venturini</h1>
        <p>
          <form onSubmit={e  => {
            e.preventDefault()
            setTodos(
              addItem(todos,inputText)
            )
          }}>
            <input id="inputTodo" onInput={(evt)=>setInput(evt.target.value)}type="text" />
            <button type="submit">Submit</button>
          </form>
          
        </p>
        {todos.map(todo => (
          <li>{todo.todo} <button>Rimuovi</button> <button>Completa</button></li>
        ))}
        
      </header>
     
    </div>
  )
}

export default App
