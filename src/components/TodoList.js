import React, { Component } from 'react';
import '../styles/todolist.css';
import Input from './Input.js';
import List from './List.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
    };
    this.updateValue = this.updateValue.bind(this);
    this.updateList = this.updateList.bind(this);
  }


  updateValue(value) {
    this.setState({ value });
  }

  updateList(e) {
    e.preventDefault();
    this.setState({
      value: '',
      list: [...this.state.list, this.state.value]
    })
  }

  render() {
    return (
      <form className="form"onSubmit={this.updateList}>
        <Input updateValue={this.updateValue} value={this.state.value} />
        <br/>
        <button type='submit' >Create New Todo</button>
        <List list={this.state.list} />
      </form>
    )
  }
}

export default TodoList;
