import React, { Component } from 'react';
import store from "./models/store";

class Cat extends Component {

  render () {
    const [{ name }, { getFood }] = this.props.catFood;
    return <div>
      <h1>页面级 store</h1>
      <div>
        猫粮名称：{name}
      </div>
      <button onClick={getFood}>获取猫粮</button>
    </div>
  }

}

export default store.withModel('catFood')(Cat);
