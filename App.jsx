import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Records from './components/Records'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to react!</h1>
        <View/>
        <Routes>
          <Route path='/' element={<Records/>}></Route>
          <Route path='/add' element={<Add person={{fname:"Adish",department:"AI",semester:"5"}}/>}></Route>
        </Routes>
        
        
    </>
  )
}

export default App 