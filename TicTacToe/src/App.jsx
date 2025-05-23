import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/grid/Grid'
import {ToastContainer} from 'react-toastify'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Grid numberOfCards={9}/>
      <ToastContainer/>
    </>
  )
}

export default App
