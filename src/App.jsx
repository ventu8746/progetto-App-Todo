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

/**
 * 
 * @param {Array<{text: string, completed: boolean}>} arr 
 * @param {number} index 
 * @returns {Array<{text: string, completed: boolean}>
 */
function deleteTodo(arr,index){
  if(index>arr.length || index < 0){
    throw new Error('the index that you have insert is inexistent')
  }

  if(index === "" || index === undefined){
    return arr;
  }else{
    return arr.filter(elem=>{
      return elem !== arr[index];
    });
  }
}

function toggleTodo(arr,index){
  const newArr=[...arr];
  
  if(index>arr.length || index < 0){
    throw new Error('the index that you have insert is inexistent')
  }

  if(index === "" || index === undefined){
    return arr;
  }else if(arr[index]){
     newArr[index].completed=!newArr[index].completed;
      };
     return newArr;
    }






function App() {
  
  const [todos, setTodos] = useState([])
  const [inputText,setInput] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    if (string !== "") {
      setTodos(todos.concat({
        todo: inputText,
        completed: false,
      }))
    }    
  }
  
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>App Todo By Marco Venturini</h1>
        <p>
          <form onSubmit={onSubmit}>
            <input id="inputTodo" onInput={(evt)=>setInput(evt.target.value)}type="text" />
            <button type="submit">Submit</button>
          </form>
          
        </p>
        {todos.map((todo,index) =>(
          <li className={todo.completed?'completed':''}>{todo.todo} <button type="button" onClick={()=>setTodos(deleteTodo(todos,index))} >Rimuovi</button> <button type="button" onClick={()=>setTodos(toggleTodo(todos,index))}>Completa</button></li>
        ))}
        
      </header>
     
    </div>
  )
}

export default App
