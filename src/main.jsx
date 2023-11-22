import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { BrowserRouter as Router } from "react-router-dom";//step 1

ReactDOM.createRoot(document.getElementById('root')).render(
 //wrap the <app>component with <router> component </router>
 <React.StrictMode>
      <Router>  
    <App />
    </Router>
  </React.StrictMode>,
)
