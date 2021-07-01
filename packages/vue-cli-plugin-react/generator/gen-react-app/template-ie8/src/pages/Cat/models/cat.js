export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
  // 定义 model 的初始 state
  state: {
    name: 'null'
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload
      };
    }
  },

  // 定义处理该模型副作用的函数
  effects: () => ({
    async getFood() {
      await delay(1000);
      this.setState({
        name: 'fish',
      })
    }
  })
};
