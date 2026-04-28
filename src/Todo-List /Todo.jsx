import React, { useState } from 'react'

const Todo = () => {
    const [todo,settodo]=useState("")
    const [todoList,setTodoList]=useState([])
    function addTolist(e){
        if (todo.trim()==='') return ;
        setTodoList([...todoList,todo])
        settodo('')
    }
   function deletethetodo(index){
        setTodoList(todoList.filter((element,i)=>i!==index))
   }
//    function MoveToUp(index){
//     setTodoList(todoList[index],todoList[index-1]=todoList[index-1],todoList[index])
//    }

  return (
    <div>
        <input value={todo} type='text' onChange={(e)=>settodo(e.target.value)} />
        <button onClick={addTolist} > add</button>
        <ol>
            {todoList.map((element,index)=>(
                <li key={index}> {element} 
                <button onClick={()=>deletethetodo(index)}>delete</button>
                {/* <button onClick={()=>MoveToUp(index)}>UP</button>
                <button onClick={()=>MoveToDown(index)}>Down</button> */}
                </li>
                
            ))}
        </ol>
    </div>
  )
}
export default Todo
