import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [count,setCounter]=useState(0)
    
    useEffect(()=>{
        console.log("runs only once when the page reload")
    },[])

    useEffect(()=>{
        console.log("count Changed",  count)
    },[count])

    useEffect(()=>{
        console.log("Mounted")
        return ()=>{
            console.log("Unmounted")
        }
    },[])
  return (
    <div> 
        <h2>{count}</h2>
        <button onClick={()=>setCounter(count+1)}>+</button>
    </div>
  )
}
export default UseEffectDemo