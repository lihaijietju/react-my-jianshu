import React, { Component,Fragment } from 'react'
export default class TodoItem extends Component {
  render () {
    let { item,handleClick } = this.props;
    return (
      <Fragment>
        <li onClick={handleClick}>{item}</li>
      </Fragment>
    )
  }
}
