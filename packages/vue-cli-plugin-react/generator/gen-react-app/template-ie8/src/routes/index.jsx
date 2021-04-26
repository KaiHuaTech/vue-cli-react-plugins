import React from 'react'
import {Router, Route, IndexRedirect} from 'react-router'
import Loadable from "react-loadable";

import Foo from "../views/Foo";

// 异步组件
const Bar = Loadable({
  loader: () => import('../views/Bar.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})


const AppRouter = function () {
  return (<Router>
    <Route path="/">
      <Route path="/foo" component={Foo} />
      <Route path="/bar" component={Bar} />
    </Route>
  </Router>)
}

AppRouter.displayName = 'AppRouter'


export default AppRouter
