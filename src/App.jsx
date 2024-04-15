

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import "./bootstrap.min.css"
import Auth from './pages/Auth'

function App() {
 

  return (
    <>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
