import React, { Component } from 'react';

import { Button, Icon, Input, Select } from 'antd';
import B from './B';

const { Option } = Select;

export default class Foo extends Component {
  state = {
    childv: 'child',
    pCount: 0
  };

  handleChange = (e) => {
    this.setState({
      childv: e.target.value
    });
  };

  handleAdd = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      pCount: this.state.pCount + 1
    });
  };

  render() {
    return (
      <div>
        Foo Page
        <br />
        <Select>
          <Option value="a">a</Option>
          <Option value="b">b</Option>
        </Select>
        <br />
        <Button type="primary" onClick={this.handleAdd}>
          add Pcount
        </Button>
        <br />
        <Icon type="search" />
        <br />
        <p>childV:{this.state.childv}</p>
        <Input value={this.state.childv} onChange={this.handleChange} />
        <br />
        <B data={this.state.childv} pCount={this.state.pCount} />
      </div>
    );
  }
}
