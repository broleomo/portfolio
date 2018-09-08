import React, {Component} from 'react';

export default class List extends Component {

  render() {
    return (
      <div>
      <h1>LIST</h1>
        {
          this.props.list.map(listItem =>
            <div>
            {listItem}
            </div>
          )
        }
      </div>
    )
  }
}
