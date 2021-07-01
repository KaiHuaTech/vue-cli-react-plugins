import createRedux from './redux';
import pluginFactory from './pluginFactory';
import dispatchPlugin from './plugins/dispatch';
import effectsPlugin from './plugins/effects';
import validate from './utils/validate';
import appendReducers from './utils/appendReducers';

const corePlugins = [dispatchPlugin, effectsPlugin];

export default class ChaseStore {
  plugins = [];

  constructor(config) {
    this.config = config;
    this.pluginFactory = pluginFactory(config);
    for (const plugin of corePlugins.concat(this.config.plugins)) {
      this.plugins.push(this.pluginFactory.create(plugin));
    }
    // preStore: middleware, model hooks
    this.forEachPlugin('middleware', (middleware) => {
      this.config.redux.middlewares.push(middleware);
    });
  }

  forEachPlugin(method, fn) {
    for (const plugin of this.plugins) {
      if (plugin[method]) {
        fn(plugin[method]);
      }
    }
  }

  addModel(model) {
    validate([
      [!model, 'model config is required'],
      [typeof model.name !== 'string', 'model "name" [string] is required'],
      [
        model.state === undefined && model.baseReducer === undefined,
        `model(${model.name}) "state" is required`,
      ],
      [
        model.baseReducer !== undefined && typeof model.baseReducer !== 'function',
        `model(${model.name}) "baseReducer" must be a function`,
      ],
    ]);
    // run plugin model subscriptions
    this.forEachPlugin('onModel', (onModel) => onModel(model));
  }

  getModels = (models) => {
    return Object.keys(models).map((name) => ({
      name,
      ...models[name],
      reducers: models[name].reducers || {},
    }));
  };

  init() {
    // collect all models
    this.models = this.getModels(this.config.models);
    for (const model of this.models) {
      this.addModel(model);
    }
    // create a redux store with initialState
    // merge in additional extra reducers
    const redux = createRedux.call(this, {
      redux: this.config.redux,
      models: this.models,
    });

    const __store = {
      name: this.config.name,
      ...redux.store,
      // dynamic loading of models with `replaceReducer`
      model: (model) => {
        this.addModel(model);
        redux.mergeReducers(redux.createModelReducer(model));
        redux.store.replaceReducer(redux.createRootReducer(this.config.redux.rootReducers));
        // https://extension.remotedev.io/docs/Troubleshooting.html#init-or-replace-action-resets-the-state-of-the-app-or-last-actions-re-applied
        redux.store.dispatch({ type: '@@redux/REPLACE ' });
      },
      // lxh pagemodel
      addPageModel: (name, model) => {
        const _m = appendReducers({[name]: model})
        const _model = this.getModels(_m)[0]
        __store.model(_model)
      }
    };

    this.forEachPlugin('onStoreCreated', (onStoreCreated) => {
      const returned = onStoreCreated(__store);
      // if onStoreCreated returns an object value
      // merge its returned value onto the store
      if (returned) {
        Object.keys(returned || {}).forEach((key) => {
          __store[key] = returned[key];
        });
      }
    });
    return __store;
  }
}
