// export default function App() {
//     return (
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     )
//   }


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home'
import LandingPage from './Pages/LandingPage'
import {Route, Routes} from 'react-router-dom'
import IndukAyam from "./Pages/Induk-ayam";
import State from './Pages/state'
import EventHandling from './Pages/EventHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/IndukAyam" element={<IndukAyam/>}/>
      <Route path="state" element={<State/>}/>
      <Route path="eventhandling" element={<EventHandling/>}/>
    </Routes>
    </>
  )
}

export default App
