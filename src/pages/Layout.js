import React, { Component } from 'react'
import User from './User';

export default class Layout extends Component {
  render () {
    console.log(this.props)
    let { tab,name } = this.props.children;
    return (
      <div>
        {tab}---{name}
        <User></User>
      </div>
    )
  }
}
