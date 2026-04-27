import React from 'react'
import Child from './Child'
import { dataContext } from './Grand'
import { useContext } from 'react'

const Parent = (props) => {
    const data=useContext(dataContext)
  return (
    <div>Parent
    {/* <Child value={props.value}/>   props drilling   */}
    <Child/>
    <h1>{data}</h1>
    </div>
  )
}
export default Parent

