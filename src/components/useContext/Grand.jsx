import React from 'react'
import Parent from './Parent'
import { createContext } from 'react'


export const dataContext=createContext()

const Grand = () => {
    const data="kishore"
  return (
    <div>Grand
      {/*  <Parent value={data} />       props drilling */}
      <dataContext.Provider value={data}>
        <Parent/>
      </dataContext.Provider>
    </div>
  )
}
export default Grand