import React from 'react';
import './global.less';

import { AppRouter } from '@/chase-react-ie8/index';
import routesConfig from './routes';
import store from './store';

function APP() {
  return (
    <store.Provider>
      <AppRouter data={routesConfig} />
    </store.Provider>
  );
}

export default APP;
