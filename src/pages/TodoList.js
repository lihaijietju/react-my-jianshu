import React, { Component , Fragment } from 'react'
import './TodoList.css';
import { Button,Input,List } from 'antd';
import 'antd/dist/antd.css';
import store from '../store';
import {getInitTodoList,getChangeInputValueAction,getAddTodoItemAction,getDeleteTodoItemAction} from '../store/actionCreators'


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);

    store.dispatch(getInitTodoList());
  }

  render () {
    return (
      <Fragment>
        <div style={{ marginLeft:'100px',marginTop:'100px'}}>
          <h3>我是todolist</h3>
          <Input
            placeholder="新增todoItem"
            value={this.state.inputValue}
            style={{ width: '400px', marginTop: '20px' }}
            onChange={this.changeInputValue}
          ></Input>
          <Button type="primary" style={{ marginLeft: '10px' }} onClick={this.addTodoItem}>提交</Button>
          
          <List
            style={{width:'400px',marginTop:'10px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (
              <List.Item onClick={this.deleteTodo.bind(this,index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
        
      </Fragment>
    )
  }

  // 输入框值修改
  changeInputValue = (e) => {
    store.dispatch(getChangeInputValueAction(e.target.value));
  }

  // 新增todoItem
  addTodoItem = () => {
    store.dispatch(getAddTodoItemAction());
  }

  // 删除item
  deleteTodo = (index) => {
    store.dispatch(getDeleteTodoItemAction(index));
  }

  // store修改之后触发
  handleStoreChange =()=> {
    this.setState(store.getState());
  }
}
