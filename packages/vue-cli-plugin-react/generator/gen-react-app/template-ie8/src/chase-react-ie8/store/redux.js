import * as Redux from 'redux';
import isListener from './utils/isListener';

const composeEnhancersWithDevtools = (devtoolOptions = {}) => {
  const { disabled, ...options } = devtoolOptions;
  /* istanbul ignore next */

  return !disabled && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(options)
    : Redux.compose;
};

export default function({ redux, models }) {
  const combineReducers = redux.combineReducers || Redux.combineReducers;
  const createStore = redux.createStore || Redux.createStore;
  const initialStates = typeof redux.initialStates !== 'undefined' ? redux.initialStates : {}; // Allows passing in of reducer functions, rather than models.
  // While not recommended,
  // this can be used for migrating a Redux codebase or configuring different Redux extensions.

  this.reducers = redux.reducers; // combine models to generate reducers

  this.mergeReducers = (nextReducers = {}) => {
    // merge new reducers with existing reducers
    this.reducers = { ...this.reducers, ...nextReducers };

    if (!Object.keys(this.reducers).length) {
      // no reducers, just return state
      return (state) => state;
    }

    return combineReducers(this.reducers);
  };

  this.createModelReducer = (model) => {
    const modelBaseReducer = model.baseReducer;
    const modelReducers = {};

    for (const modelReducer of Object.keys(model.reducers || {})) {
      const action = isListener(modelReducer) ? modelReducer : `${model.name}/${modelReducer}`;
      modelReducers[action] = model.reducers[modelReducer];
    } // use the `state = model.state` argument convention popularized

    const combinedReducer = (state = model.state, action) => {
      if (typeof modelReducers[action.type] === 'function') {
        return modelReducers[action.type](state, action.payload, action.meta);
      }

      return state;
    };

    this.reducers[model.name] = !modelBaseReducer
      ? combinedReducer
      : (state, action) => combinedReducer(modelBaseReducer(state, action), action);
  }; // initialize model reducers

  for (const model of models) {
    this.createModelReducer(model);
  } // rootReducers is a way to setup middleware hooks at the base of your root reducer.
  // Unlike middleware, the return value is the next state.
  // If undefined, the state will fallback to the initial state of reducers.

  this.createRootReducer = (rootReducers = {}) => {
    const mergedReducers = this.mergeReducers();

    if (Object.keys(rootReducers).length) {
      return (state, action) => {
        const rootReducerAction = rootReducers[action.type];

        if (rootReducerAction) {
          return mergedReducers(rootReducerAction(state, action), action);
        }

        return mergedReducers(state, action);
      };
    }

    return mergedReducers;
  };

  const rootReducer = this.createRootReducer(redux.rootReducers);
  const middlewares = Redux.applyMiddleware(...redux.middlewares);
  const enhancers = composeEnhancersWithDevtools(redux.devtoolOptions)(
    ...redux.enhancers,
    middlewares,
  );
  this.store = createStore(rootReducer, initialStates, enhancers);
  return this;
}
