import React, { Component } from 'react';
import A from './WithRouterA';

import style from './bar.module.less';

export default class Bar extends Component {
  handleClick = () => {
    const a = this.refA.getWrappedInstance();
    if (a) {
      a.alert();
    }
  };

  render() {
    return (
      <div>
        <p className={style.red}>I am Bar Page.</p>
        <button onClick={this.handleClick}>ref a click</button>
        <A ref={(r) => (this.refA = r)} />
      </div>
    );
  }
}
