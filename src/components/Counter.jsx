import React, { useState } from 'react'

const Counter = () => {
    const[count,setcount]=useState(0)
    const[name,setName]=useState("")
  return (
    <div>Counter
        <h1> Enter your name{name}</h1>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}></input>
        <h1>{count}</h1>
        <button onClick={()=> setcount(count+1)}>+</button>
        <button onClick={()=> setcount(count-1)}>-</button>
        <button onClick={()=> setcount(0)}>Reset</button>
    </div>
  )
}
export default Counter