import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        placeholder="Create new todo"
        onChange={e => this.props.updateValue(e.target.value)}
      />

    )
  }
}
