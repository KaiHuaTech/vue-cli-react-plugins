/**
 * Dispatch Plugin
 *
 * generates dispatch[modelName][actionName]
 */
const dispatchPlugin = {
  exposed: {
    // required as a placeholder for store.dispatch
    // eslint-disable-next-line no-unused-vars
    storeDispatch(action, state) {
      // eslint-disable-next-line no-console
      console.warn('Warning: store not yet loaded');
    },

    storeGetState() {
      // eslint-disable-next-line no-console
      console.warn('Warning: store not yet loaded');
    },

    /**
     * dispatch
     *
     * both a function (dispatch) and an object (dispatch[modelName][actionName])
     * @param action T.Action
     */
    dispatch(action) {
      return this.storeDispatch(action);
    },

    /**
     * createDispatcher
     *
     * genereates an action creator for a given model & reducer
     * @param modelName string
     * @param reducerName string
     */
    createDispatcher(modelName, reducerName) {
      return async (payload, meta) => {
        const action = {
          type: `${modelName}/${reducerName}`,
        };

        if (typeof payload !== 'undefined') {
          action.payload = payload;
        }

        if (typeof meta !== 'undefined') {
          action.meta = meta;
        }

        return this.dispatch(action);
      };
    },
  },

  onStoreCreated(store) {
    this.storeDispatch = store.dispatch;
    this.storeGetState = store.getState;
    return {
      dispatch: this.dispatch,
    };
  },

  // generate action creators for all model.reducers
  onModel(model) {
    this.dispatch[model.name] = {};

    if (!model.reducers) {
      return;
    }

    for (const reducerName of Object.keys(model.reducers)) {
      this.validate([
        [!!reducerName.match(/\/.+\//), `Invalid reducer name (${model.name}/${reducerName})`],
        [
          typeof model.reducers[reducerName] !== 'function',
          `Invalid reducer (${model.name}/${reducerName}). Must be a function`,
        ],
      ]);
      this.dispatch[model.name][reducerName] = this.createDispatcher.apply(this, [
        model.name,
        reducerName,
      ]);
    }
  },
};
export default dispatchPlugin;
