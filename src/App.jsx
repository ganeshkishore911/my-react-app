import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import Grand from './components/useContext/Grand'
import UseEffectDemo from './components/UseEffectDemo'
import UseRef from './components/UseRef'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { toggleTheme,setText ,name,increament,decreament, reset} from './themeSlice'

function App() {
const mode=useSelector((state)=>state.theme.mode) // get the current theme from the store
const text=useSelector((state)=>state.theme.text)
const name=useSelector((state)=>state.theme.name)
const counter=useSelector((state)=>state.theme.counter)
const dispatch=useDispatch()
console.log(text)
  return (
   <> 
  <div
      style={{
        backgroundColor: mode === "light" ? "#fff" : "#333",
        color: mode === "light" ? "#000" : "#fff",
        height: "50vh"
      }}
    >
      <h1>{name}</h1>
      <h1>{mode} Mode</h1>

      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
          <h1>{text}</h1>
<input type="text" value={text} onChange={(e)=>dispatch(setText(e.target.value))}/>
<h1> Counter: {counter}</h1>
<button onClick={()=>dispatch(increament())}>+</button>
<button onClick={()=>dispatch(decreament())}>-</button>
<button onClick={()=>dispatch(reset())}>reset</button>
    </div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/counter' element={<Counter/>}/>
  <Route path='/useEffect' element={<UseEffectDemo/>}/>
  <Route path='/useRef' element={<UseRef/>} />
  <Route path='/grand' element={<Grand/>}/>
</Routes>
</BrowserRouter>
   </>
  )
}

export default App
