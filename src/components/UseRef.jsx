import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [count,setCount]=useState(0)
    let refcount= useRef(0)   // this is a object
    useEffect(()=>{
        console.log(count)
    })
    function inc(){
        //setCount(count+1)
        refcount.current++
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={inc}> +</button>
        <button onClick={()=>setCount(refcount.current)}> useref</button>
    </div>
  )
}
export default UseRef