import './App.css'
import Counter from './components/Counter'
import UseEffectDemo from './components/UseEffectDemo'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {


  return (
   <> 
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/counter' element={<Counter/>}/>
  <Route path='/useEffect' element={<UseEffectDemo/>}/>
</Routes>
</BrowserRouter>
   </>
  )
}

export default App
