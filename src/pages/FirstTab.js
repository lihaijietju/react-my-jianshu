import React, { Component } from 'react'

export default class FirstTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'我是firstTab'
    }
  }
  render () {
    let { name } = this.state;
    return (
      <div>
        {name}
      </div>
    )
  }
}
