import React from 'react'
import Logo from './assets/logo.jpg'

import AppRouter from "./routes/index";

import './style.less'

function APP() {
  return <div>
    <img 
      className="logo"
      alt="React logo"
      src={Logo}
      style={{width: '50px'}}
    />
    <AppRouter />
  </div>
}

export default APP
