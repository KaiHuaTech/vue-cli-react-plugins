import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import actionTypes from '../actionTypes';

const { SET_STATE } = actionTypes;

export default () => {
  return {
    onStoreCreated(store) {
      const Provider = function(props) {
        const { children, initialStates } = props;
        if (initialStates) {
          Object.keys(initialStates).forEach((name) => {
            const initialState = initialStates[name];
            if (initialState && store.dispatch[name][SET_STATE]) {
              store.dispatch[name][SET_STATE](initialState);
            }
          });
        }
        return <ReduxProvider store={store}>{children}</ReduxProvider>;
      };
      return { Provider };
    },
  };
};
