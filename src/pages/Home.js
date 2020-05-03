import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter:0
    };
  }

  // 生命周期-挂载完成之后
  componentDidMount () {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  //卸载
  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  render () {
    const str = '我是home页面';
    const { date,counter } = this.state;
    return (
      <div>
        {str}-{date.toLocaleTimeString()}-{counter}
        <button onClick={this.setCounter}>改变</button>
      </div>
    )
  }


  setCounter =()=> {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    this.setState((nextState) => {
      return {
        counter:nextState.counter + 1
      }
    })
    console.log(this.state.counter)
  }
}
