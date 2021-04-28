import React from 'react'
import {Router, Route, Link, IndexRedirect, hashHistory} from 'react-router'

import AsyncLoad from '../components/async'

import Foo from "../views/Foo";
// 异步组件
const Bar = AsyncLoad({ loader: () => import('../views/Bar.jsx') })

const Layout = props => {
  return (
    <div className='layout'>
      <div className='layout-sidebar'>
        <ol>
          <li>
            <Link to="/foo">go to foo</Link> 
          </li>
          <li>
            <Link to="/bar">go to bar</Link>
          </li>
        </ol>
      </div>
      <div className='layout-content'>
        {props.children}
      </div>
    </div>
  )
}

const AppRouter = function () {
  return (<Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/foo" component={Foo} />
      <Route path="/bar" component={Bar} />
      <IndexRedirect to="/foo" />
    </Route>
  </Router>)
}

AppRouter.displayName = 'AppRouter'

export default AppRouter
