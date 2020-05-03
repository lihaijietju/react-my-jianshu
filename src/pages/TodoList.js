import React, { Component , Fragment } from 'react'
import './TodoList.css'
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ['学英语','学ying语'],
      newTodo: ''
    };
  }

  render () {
    let { todoList, newTodo } = this.state;
    return (
      <Fragment>
        <h3>我是todolist</h3>
        <input className='input-class' value={newTodo} onChange={this.changeInputValue} />
        <button onClick={this.addTodoList}>提交</button>
        <ul>
          {
            todoList.map((item,index) => {
              return (
                <Fragment key={item + index}>
                  <li onClick={this.deleteTodo.bind(this,index)}>
                      {item}
                  </li>
                </Fragment>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  changeInputValue = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  }

  addTodoList = () => {
    let { todoList,newTodo } = this.state;
    let todoListTmp = [...todoList];
    todoListTmp.push(newTodo);
    this.setState({
      todoList: todoListTmp,
      newTodo:''
    });
  }

  deleteTodo = (index) => {
    let { todoList } = this.state;
    let todoListTmp = [...todoList];
    todoListTmp.splice(index, 1);

    this.setState({
      todoList: todoListTmp
    });
  }
}
