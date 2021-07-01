// import { convertEffects, convertActions } from './utils/converter';
import mergeConfig from './utils/mergeConfig';
import appendReducers from './utils/appendReducers';
import ChaseStore from './chasestore';
import createProviderPlugin from './plugins/provider';
import createModelApisPlugin from './plugins/modelApis';
import compose from 'lodash/fp/compose';

// incrementer used to provide a store name if none exists
let count = 0;

const init = (initConfig = {}) => {
  const name = initConfig.name || count.toString();
  count += 1;
  const config = mergeConfig({ ...initConfig, name });
  return new ChaseStore(config).init();
};
export const createStore = (models, initConfig) => {
  const {
    // disableImmer,
    // disableLoading,
    // disableError,
    plugins = [],
    redux = {},
  } = initConfig || {};
  const middlewares = redux.middlewares || [];

  // defaults plugins
  plugins.push(createProviderPlugin({}));
  plugins.push(createModelApisPlugin());

  // compatibility handling
  const wrappedModels = appendReducers(models);

  const store = init({
    models: wrappedModels,
    plugins,
    redux: {
      ...redux,
      middlewares,
    },
  });

  return store;
};

export { compose };
