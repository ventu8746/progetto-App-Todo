/*function toggleTodo(arr,index){
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
      }*/

function toggleTodo(arr, index) {
	if (index > arr.length || index < 0) {
		throw new Error("the index that you have insert is inexistent");
	}

	if (index === "" || index === undefined) {
		return arr;
	} else {
		return arr.map((elem, index2, arr) => {
			if (index !== index2) {
				return elem;
			} else {
				return { todo: elem.todo, completed: !elem.completed };
			}
		});
	}
}

const arr = [
	{ todo: "pane", completed: false },
	{ todo: "latte", completed: false },
	{ todo: "banane", completed: false },
];

console.log(toggleTodo(arr, 0));
//console.log(toggleTodo(arr, 0));
