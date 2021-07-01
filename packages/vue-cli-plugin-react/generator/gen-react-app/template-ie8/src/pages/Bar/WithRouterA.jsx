import React, { Component } from 'react';
import { withRouter } from '@/chase-react-ie8';

class A extends Component {
  alert = () => {
    // eslint-disable-next-line no-alert
    alert('A');
  };

  handleClick = () => {
    this.props.router.push('/demo/foo');
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>A</p>
        <button onClick={this.handleClick}>go to foo</button>
      </div>
    );
  }
}

export default withRouter(A, { withRef: true });
