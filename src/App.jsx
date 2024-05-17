

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import "./bootstrap.min.css"
import Auth from './pages/Auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { tokenAuthContext } from './Context_api/AuthContext'


function App() {
 
const {authStatus} = useContext(tokenAuthContext)
  return (
    <>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={authStatus?<Dashboard/>:<Landing/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/projects' element={authStatus?<Projects/>:<Landing/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
