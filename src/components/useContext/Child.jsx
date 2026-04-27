import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Grand'


const Child = (props) => {
  console.log(props.value)
  const data=useContext(dataContext)
  return (
    <div>child
         {/*  {props.value}      props drilling*/}
         <h1>{data}</h1>
    </div>
  )
}
export default Child