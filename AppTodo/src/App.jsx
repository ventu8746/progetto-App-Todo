import React, { useState } from 'react'
import './App.css'

/*
function Addtodo(todo){

  

}
*/

/**
 * 
 * @param {Array} arr 
 * @param {string} todo 
 */
function addTodoItem(todo){
  
  const arrTodo = [{todo:todo,completed:false}];
  return arrTodo;

}

console.log(addTodoItem('panes'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       
        <h1>App Todo By Marco Venturini</h1>
        <p>
          <form onSubmit="">
            <input id="inputTodo" onInput={(evt)=>evt.target.value}type="text" />
            <button type="submit">Submit</button>
          </form>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>first Todo <button>elimina</button>  <button>completato</button></p>
      </header>
     
    </div>
  )
}

export default App
