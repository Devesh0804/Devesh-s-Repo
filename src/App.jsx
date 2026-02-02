import { useState  } from 'react'
import {BrowserRouter ,Routes , Route}from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import Succsess from './Succsess';
import Failure from './Failure'
import Next from './Next'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = '/' element = {<First/>} />
        <Route path='/success' element = {<Succsess/>}></Route>
        <Route path='/failure' element = {<Failure/>}></Route>
        <Route path ='/next' element = {<Next/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
