import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newnote from './Pages/NewNotes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Newnote/>
    </>
  )
}

export default App
