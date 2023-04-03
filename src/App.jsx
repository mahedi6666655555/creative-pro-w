import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Fetch from './components/fetch/Fetch'
import Recharts from './components/recharts/Recharts'

function App() {

  return (
    <div className="App">
      <div>
        <Header></Header>
        <Fetch></Fetch>
        <Recharts></Recharts>
      </div>
    </div>
  )
}

export default App
