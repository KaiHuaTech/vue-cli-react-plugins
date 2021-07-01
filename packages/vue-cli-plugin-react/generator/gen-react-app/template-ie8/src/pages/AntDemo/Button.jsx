import React, { Component } from 'react';

import { Button } from 'antd';

export default class MYButton extends Component {
  render() {
    return (
      <div>
        <h2>尺寸</h2>
        <Button>正常</Button>
        &nbsp;
        <Button size="small">小</Button>
        <h2>类型</h2>
        <Button type="primary">重要</Button>
        &nbsp;
        <Button type="ghost">次要</Button>
        &nbsp;
        <Button>普通</Button>
        &nbsp;
        <Button disabled>禁用</Button>
      </div>
    );
  }
}
