export default {
  // 定义 model 的初始 state
  state: {
    count: 0,
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async add(_, rootState) {
      dispatch.counter.update({
        count: rootState.counter.count + 1,
      });
    },
  }),
};
