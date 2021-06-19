import { useState } from "react";

/**
 * 
 * @param {Array} array
 * @param {string} todo
 */
export function AddTodo(todo){

    [arr,addTodo]=useState([''])

    const todo =[{todo:todo,completed:false}];
    return arr.concat(todo)

}
const arrProv=[];

console.log(AddTodo(arrProv,'pane'))