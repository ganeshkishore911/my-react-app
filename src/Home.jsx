import React from 'react'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Counter from './components/Counter'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div><h1>kishore</h1>
   <Student name='kishore'/>
   <Teacher name='ram' age={33} />
   <button onClick={()=>navigate('/counter')}> Counter</button>
   <button onClick={()=>navigate('/useEffect')}>useEffect</button>
   </div>
  )
}
export default Home