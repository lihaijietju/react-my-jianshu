import React, { Component , Fragment } from 'react'
import './TodoList.css';
import TodoItem from '../components/TodoItem'
import { Button,Input } from 'antd';
import 'antd/dist/antd.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ['学英语','学ying语'],
      newTodo: ''
    };
  }

  render () {
    return (
      <Fragment>
        <h3>我是todolist</h3>
        <Input placeholder="我是holder" style={{ width: '400px', marginTop: '20px' }}></Input>
        <Button type="primary" style={{marginLeft:'10px'}}>提交</Button>
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
    console.log(index,'index')
    let { todoList } = this.state;
    let todoListTmp = [...todoList];
    todoListTmp.splice(index, 1);

    this.setState({
      todoList: todoListTmp
    });
  }
}
