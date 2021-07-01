import React, { Component } from 'react';

import { Input, Form } from 'antd';

import style from './input.module.less';

const FormItem = Form.Item;

export default class MYInput extends Component {
  state = {
    v: 'abc',
  };

  handleChange = (evt) => {
    this.setState({
      v: evt.target.value,
    });
  };

  render() {
    const { v } = this.state;
    return (
      <div className={style.myInputBox}>
        <p>
          value: {v}
          <Input defaultValue={v} onChange={this.handleChange} placeholder="请输入" />
        </p>
        <p>
          默认：
          <Input size="large" placeholder="大尺寸" />
          &nbsp;
          <Input placeholder="请输入" />
          &nbsp;
          <Input size="small" placeholder="小尺寸" />
        </p>
        <p>
          禁用：
          <Input placeholder="请输入" disabled />
        </p>
        <p>
          Allow Clear：
          <Input placeholder="请输入" allowClear />
        </p>
        <div>
          <FormItem label="错误状态" validateStatus="error" help="错误">
            <Input size="default" placeholder="请输入" />
          </FormItem>
        </div>
      </div>
    );
  }
}
