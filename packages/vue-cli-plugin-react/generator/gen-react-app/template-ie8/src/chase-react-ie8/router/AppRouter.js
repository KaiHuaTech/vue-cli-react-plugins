import React, { Component } from 'react';
import { Router, Route, hashHistory, Redirect, IndexRedirect } from 'react-router';

/* 
1. /a -> /
2. / -> /
3. 
*/
function ensurePath(path) {
  const _path = path.trim();
  if (_path === '/') {
    return _path;
  } else {
    return _path.replace(/^\/+/, '');
  }
}

function renderRoute(item) {
  const { path, exact, component, wrappers = [], children, redirect, breadcrumbName} = item;

  if (!path || !path.trim()) {
    const p = {
      key: '*',
      path: '*',
      component
    };
    if (breadcrumbName) {
      p.breadcrumbName = breadcrumbName;
    }
    return <Route {...p} />;
  }

  const _path = ensurePath(path);
  if (redirect) {
    const _redirect = ensurePath(redirect);
    if (_path === '/') {
      return <IndexRedirect key="IndexRedirect" to={_redirect} />;
    } else {
      return <Redirect key={path} from={_path} to={_redirect} />;
    }
  }

  let _c = component;

  if (_c && Array.isArray(wrappers)) {
    _c = wrappers.reduce((prev, cur) => {
      return cur(prev);
    }, _c);
  }

  const p = {
    key: _path,
    path: _path,
    exact: exact || false,
    component: _c
  };

  ['onEnter',
  'onLeave',
  'onChange'].forEach(_k => {
    if (item[_k]) {
      p[_k] = item[_k]
    }
  })

  if (breadcrumbName) {
    p.breadcrumbName = breadcrumbName;
  }

  return (
    <Route {...p}>
      {Array.isArray(children) &&
        children.length > 0 &&
        children.map((_child) => renderRoute(_child, false))}
    </Route>
  );
}

class AppRouter extends Component {
  componentDidMount() {
    console.log('AppRouter Did Mount');
  }

  render() {
    const data = this.props.data || [];
    const a = data.map((item) => renderRoute(item));
    return <Router history={hashHistory}>{a}</Router>;
  }
}

AppRouter.displayName = 'AppRouter';

export default AppRouter;
