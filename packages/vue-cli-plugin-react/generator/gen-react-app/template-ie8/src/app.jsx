import React from 'react'
import './style.less'
import Logo from './assets/logo.jpg'

import AppRouter from "./routes/index";

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
