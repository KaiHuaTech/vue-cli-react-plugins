import { lazy } from './chase-react-ie8';
import DefaultLayout from './layouts/DefaultLayout';

import Foo from './pages/Foo';
import NotFound from './components/NotFound';

const Bar = lazy(() => import('./pages/Bar.jsx'));
const Editor = lazy(() => import('./pages/editor/index.jsx'));

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
        component: Foo,
        // 配置路由的高阶组件
        // wrappers: [wrapperPage],
      },
      {
        // 路由路径
        path: '/bar',
        // 精确匹配
        // 路由组件
        component: Bar,
      },
      {
        // 路由路径
        path: '/editor',
        // 精确匹配
        // 路由组件
        component: Editor,
      },
      {
        path: '/',
        // 重定向
        redirect: '/foo',
      },
      {
        path: '/a',
        // 重定向
        redirect: '/foo',
      },
      {
        // 404 没有匹配到的路由
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
