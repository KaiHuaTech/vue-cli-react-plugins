import actionTypes from '../actionTypes';

const { SET_STATE } = actionTypes;

export default function(originModels) {
  const models = {};
  Object.keys(originModels).forEach((name) => {
    const model = originModels[name];
    if (!model.reducers) {
      model.reducers = {};
    }
    // 内置的 setState 逻辑
    if (!model.reducers.setState) {
      model.reducers.setState = (state, payload) => ({
        ...state,
        ...payload,
      });
    }
    if (!model.reducers[SET_STATE]) {
      model.reducers[SET_STATE] = (state, payload) => payload;
    }
    models[name] = model;
  });
  return models;
}
