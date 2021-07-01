import { lazy } from './chase-react-ie8';
import DefaultLayout from './layouts/DefaultLayout';

import Foo from './pages/Foo/index';
import NotFound from './components/NotFound';

const Bar = lazy(() => import('./pages/Bar/index.jsx'));
const WidgetButton = lazy(() => import('./pages/Widgets/Button.jsx'));
const WidgetInput = lazy(() => import('./pages/Widgets/Input/index.jsx'));

const routerConfig = [
  {
    path: '/demo',
    component: DefaultLayout,
    children: [
      {
        // 路由路径
        path: '/foo',
        // 精确匹配
        exact: true,
        // 路由组件
        component: Foo
        // 配置路由的高阶组件
        // wrappers: [wrapperPage],
      },
      {
        // 路由路径
        path: '/bar/:a',
        // 精确匹配
        // 路由组件
        component: Bar
      },
      {
        path: '/',
        // 重定向
        redirect: '/foo'
      },
      {
        path: '/a',
        // 重定向
        redirect: '/foo'
      },
      {
        // 404 没有匹配到的路由
        component: NotFound
      }
    ]
  },
  {
    path: '/antd',
    children: [
      {
        // 路由路径
        path: '/button',
        // 精确匹配
        exact: true,
        // 路由组件
        component: WidgetButton
      },
      {
        // 路由路径
        path: '/input',
        // 精确匹配
        exact: true,
        // 路由组件
        component: WidgetInput
      }
    ]
  }
];

export default routerConfig;
