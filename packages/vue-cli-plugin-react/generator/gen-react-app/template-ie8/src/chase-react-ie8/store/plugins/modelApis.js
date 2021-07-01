import React from 'react';
import { connect } from 'react-redux';

export default () => ({
  onStoreCreated(store) {
    function getModel(name) {
      return [getModelState(name), getModelDispatchers(name)];
    }
    function getModelState(name) {
      return store.getState()[name];
    }
    function getModelDispatchers(name) {
      return store.dispatch[name];
    }

    function withModel(name, _mapModelToProps) {
      const mapModelToProps =
        _mapModelToProps ||
        ((model) => ({
          [name]: model
        }));

      // 包装 connect
      return connect((_state, props) => {
        const value = store.getModel(name);
        const withProps = mapModelToProps(value);
        return { ...withProps, ...props };
      });
    }

    function createWithModelDispatchers(fieldSuffix = 'Dispatchers') {
      return function withModelDispatchers(name, _mapModelDispatchersToProps) {
        const mapModelDispatchersToProps =
          _mapModelDispatchersToProps || ((dispatch) => ({ [`${name}${fieldSuffix}`]: dispatch }));
        return connect((_state, props) => {
          const dispatchers = store.getModelDispatchers(name);
          return { ...mapModelDispatchersToProps(dispatchers), ...props };
        });
      };
    }

    const withModelDispatchers = createWithModelDispatchers();

    return {
      getModel,
      getModelState,
      getModelDispatchers,

      withModel,
      withModelDispatchers
    };
  }
});
