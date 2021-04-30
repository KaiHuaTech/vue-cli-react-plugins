import React, { Component } from 'react';

import { Button, Icon } from 'antd';

export default class Foo extends Component {
  render() {
    return (
      <div>
        Foo Page
        <br />
        <Button type="primary">i am button</Button>
        <br />
        <Icon type="search" />
      </div>
    );
  }
}

