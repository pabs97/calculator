import React, { Component } from 'react';

export default class Button extends Component {
  state = {};

  render() {
    const { type, value } = this.props;

    return (
      <button
        className={'button ' + type}
        onClick={() => this.props.onNumber(this.props)}
      >
        {value}
      </button >
    );
  }
}