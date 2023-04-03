import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Fetch from './components/fetch/Fetch'
import Recharts from './components/recharts/Recharts'
import Footer from './components/footer/Footer'
import Login from './components/login-page/Login'

function App() {

  return (
    <div className="App">
      <div>
        <Login></Login>
        <Header></Header>
        <Fetch></Fetch>
        <Recharts></Recharts>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
