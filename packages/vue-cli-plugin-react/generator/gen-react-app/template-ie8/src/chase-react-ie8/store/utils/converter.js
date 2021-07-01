import isFunction from 'lodash.isfunction';
import warning from './warning';
import actionTypes from '../actionTypes';

const { SET_STATE } = actionTypes;

/**
 * convertEffects
 *
 * Compatible with 1.1.0 ~ 1.2.0
 * effects: {} => effects: () => ({})
 * @param originModels
 */
export function convertEffects(originModels) {
  const models = {};
  Object.keys(originModels).forEach((name) => {
    const model = originModels[name];
    const originEffects = model.effects;
    if (originEffects && !isFunction(originEffects)) {
      warning(
        `Model(${name}): Defining effects as objects has been detected, please use \`{ effects: () => ({ effectName: () => {} }) }\` instead. \n\n\n Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#define-model-effects to learn about how to upgrade.`,
      );
      model.effects = (dispatch) => {
        const effects = {};
        Object.keys(originEffects).forEach((key) => {
          const originEffect = originEffects[key];
          effects[key] = (payload, rootState) =>
            originEffect(rootState[name], payload, dispatch[name], dispatch);
        });
        return effects;
      };
    }
    models[name] = model;
  });
  return models;
}

/**
 * convertActions
 *
 * Compatible with 1.0.0 ~ 1.1.0
 * actions: {} => effects: () => ({})
 * @param originModels
 */
export function convertActions(originModels) {
  const models = {};
  Object.keys(originModels).forEach((name) => {
    const model = originModels[name];
    const { actions } = model;
    if (actions) {
      warning(
        `Model(${name}): The actions field has been detected, please use \`reducers\` and \`effects\` instead. Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#define-model-actions to learn about how to upgrade.`,
      );
      if (!model.reducers) {
        model.reducers = {};
      }
      model.effects = function(dispatch) {
        const effects = {};
        Object.keys(actions).forEach((key) => {
          const originAction = actions[key];
          effects[key] = async function(payload, rootState) {
            const result = await originAction(rootState[name], payload, dispatch[name], dispatch);
            if (dispatch[name][SET_STATE]) {
              dispatch[name][SET_STATE](result);
            }
          };
        });
        return effects;
      };
    }
    models[name] = model;
  });
  return models;
}
