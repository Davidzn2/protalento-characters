import React from 'react'
import ReactDOM from 'react-dom/client'
import Frutas from './Components/Frutas.jsx'
import Verduras from './Components/Verduras.jsx'
import MyRoutes from './Router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes />
    {/* <Frutas />
    <Verduras /> */}
  </React.StrictMode>,
)
