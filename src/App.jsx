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

  return (
    <div className="App">
      <header className="App-header">
       
        <h1>App Todo By Marco Venturini</h1>
        <p>
          <form onSubmit={e  => {
            e.preventDefault()
            setTodos(
              addItem(todos, "testo di prova. Andrebbe preso dall'input")
            )
          }}>
            <input id="inputTodo" onInput={(evt)=>evt.target.value}type="text" />
            <button type="submit">Submit</button>
          </form>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        {todos.map(todo => (
          <li>{todo.todo}</li>
        ))}
        
      </header>
     
    </div>
  )
}

export default App
