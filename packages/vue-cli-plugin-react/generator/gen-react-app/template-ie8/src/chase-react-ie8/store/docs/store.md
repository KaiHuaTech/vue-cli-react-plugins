## model

### reducers

```js
const todos = {
  state: [
    {
      title: 'Learn typescript',
      done: true,
    },
  ],
  reducers: {
    // 正确用法
    add(state, todo) {
      state.push(todo);
    },
  },
};
```

### effects

```js
const counter = {
  state: 0,
  reducers: {
    decrement: (prevState) => prevState - 1,
  },
  effects: () => ({
    async asyncDecrement() {
      await delay(1000); // 进行一些异步操作
      this.decrement(); // 调用模型 reducers 内的方法来更新状态
    },
  }),
};
```

### 同名处理

如果 reducers 和 effects 中的方法重名，则会在先执行 reducer.foo 后再执行 effects.foo：

```js
const model = {
  state: [],
  reducers: {
    add(state, todo) {
      state.push(todo);
    },
  },
  effects: (dispatch: RootDispatch) => ({
    // 将会在 reducers.add 执行完成后再执行该方法
    add(todo) {
      dispatch.user.setTodos(store.getModelState('todos').length);
    },
  }),
};
```

### this.setState

icestore 内置提供了名为 setState reducer ，其作用类似于 React Class 组件中的 setState，但仅支持一个参数且参数是对象类型。

setState 的 reducer 内部实现类似于：

```
const setState = (prevState, payload) => ({
  ...prevState,
  ...payload,
});
```

### 模型联动

您可以通过声明 effects 函数的第一个参数 dispatch 来调用其他模型的方法：

```js
import { createStore } from '@ice/store';

const user = {
  state: {
    foo: [],
  },
  effects: (dispatch) => ({
    like(payload, rootState) {
      this.doSomething(payload); // 调用 user 内的其他 effect 或 reducer
      // 另一种调用方式：dispatch.user.doSomething(payload);
      dispatch.todos.foo(payload); // 调用其他模型的 effect 或 reducer
    },
    doSomething(payload) {
      // ...
      this.foo(payload);
    },
  }),
  reducers: {
    foo(prevState, payload) {
      return {
        ...prevState,
      };
    },
  },
};

const todos = {
  /* ... */
};

const store = createStore({ user, todos });
```

## createStore

### Provider

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '@ice/store';

const { Provider } = createStore(models);
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootEl,
);
```

### getModel

`getModel(name: string): [ state, dispatchers ]`

### withModel

`withModel(name: string, mapModelToProps?: (model: [state, dispatchers]) => Object = (model) => ({ [name]: model }) ): (React.Component) => React.Component`

```js
import { ExtractIModelFromModelConfig } from '@ice/store';
import todosModel from '@/models/todos';
import store from '@/store';

interface Props {
  todos: ExtractIModelFromModelConfig<typeof todosModel>; // `withModel` automatically adds the name of the model as the property
}

class TodoList extends Component<Props> {
  render() {
    const { counter } = this.props;
    const [state, dispatchers] = counter;

    state.value; // 0

    dispatchers.add(1);
  }
}

export default withModel('counter')(TodoList);
```

可以使用 mapModelToProps 设置 props 的字段名：

```js
import { ExtractIModelFromModelConfig } from '@ice/store';
import todosModel from '@/models/todos';
import store from '@/store';

const { withModel } = store;

interface Props {
  title: string;
  customKey: ExtractIModelFromModelConfig<typeof todosModel>;
}

class TodoList extends Component<Props> {
  render() {
    const { title, customKey } = this.props;
    const [state, dispatchers] = customKey;

    state.field; // get state
    dispatchers.add({
      /* ... */
    }); // run action
  }
}

export default withModel(
  'todos',

  // mapModelToProps: (model: [state, dispatchers]) => Object = (model) => ({ [modelName]: model }) )
  (model) => ({
    customKey: model,
  }),
)(TodoList);
```

### connect 多个 model

```js
import store from '@/store';
import { compose } from '@/chase-react-ie8';

export default compose(store.withModel('counter'), store.withModel('user'))(Component);
```
