import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './Context_api/ContextShare.jsx'
import AuthContext from './Context_api/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextShare>
    <AuthContext>
    <App />
    </AuthContext>
    </ContextShare>
    </BrowserRouter>
  </React.StrictMode>,
)
