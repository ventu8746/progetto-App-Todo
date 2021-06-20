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
    

    const arr=[{todo:'pane',completed:false}]

    console.log(toggleTodo(arr,0));
    console.log(toggleTodo(arr,0));