import React from 'react'
import {Router, Route, IndexRedirect} from 'react-router'
import Loadable from "react-loadable";

function BecomeAsyncComponent(p) {
  return Loadable({
    loader: () => import(p),
    loading() {
      return <div>Loading...</div>
    }
  });
}

const Foo = BecomeAsyncComponent('../views/Foo.jsx')
const Bar = BecomeAsyncComponent('../views/Bar.jsx')


const AppRouter = function () {
  return (<Router>
    <Route path="/">
      <Route path="/foo" compoent={Foo} />
      <Route path="/bar" compoent={Bar} />
    </Route>
  </Router>)
}