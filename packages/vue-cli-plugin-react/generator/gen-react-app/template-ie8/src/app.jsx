import React from 'react'
import './style.css'
import Logo from './assets/logo.svg'

import AppRouter from "./routes/index";

function APP() {
  return <div>
    <img alt="React logo" src={Logo}></img>
    
    <hr/>
    
    <AppRouter />
  </div>
}

export default APP