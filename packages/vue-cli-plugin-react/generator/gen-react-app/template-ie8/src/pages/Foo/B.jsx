import React, { Component } from 'react';

import { Button } from 'antd';
import store from '@/store';
import { compose } from '@/chase-react-ie8';

class Foo extends Component {
  render() {
    const [{ count }, { add }] = this.props.counter;
    const [{ name }, { getUserInfo }] = this.props.user;
    const { pCount } = this.props;
    return (
      <div>
        Foo child Page
        <br />
        Count: {pCount}
        <p>value form parent: {this.props.data}</p>
        <h2>counter model</h2>
        count: {count}
        <Button onClick={() => add()}>add</Button>
        <h2>user model</h2>
        user: {name}
        <Button onClick={() => getUserInfo()}>getUserInfo</Button>
      </div>
    );
  }
}

export default compose(store.withModel('counter'), store.withModel('user'))(Foo);
