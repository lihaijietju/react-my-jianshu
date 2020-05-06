import React, { Component , Fragment } from 'react'
import './TodoList.css';
import { Button,Input,List } from 'antd';
import 'antd/dist/antd.css';
import {getInitTodoList,getChangeInputValueAction,getAddTodoItemAction,getDeleteTodoItemAction} from '../store/actionCreators'

import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.props.getInitTodoList();
  }

  render () {
    return (
      <Fragment>
        <div style={{ marginLeft:'100px',marginTop:'100px'}}>
          <h3>我是todolist</h3>
          <Input
            placeholder="新增todoItem"
            value={this.props.inputValue}
            style={{ width: '400px', marginTop: '20px' }}
            onChange={this.props.inputValueChange}
          ></Input>
          <Button type="primary" style={{ marginLeft: '10px' }} onClick={this.props.addTodoItem}>提交</Button>
          
          <List
            style={{width:'400px',marginTop:'10px'}}
            bordered
            dataSource={this.props.list}
            renderItem={(item,index) => (
              <List.Item onClick={this.props.deleteTodo.bind(this,index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputValueChange: (e) => {
      dispatch(getChangeInputValueAction(e.target.value))
    },
    addTodoItem: () => {
      dispatch(getAddTodoItemAction())
    },
    deleteTodo: (index) => {
      dispatch(getDeleteTodoItemAction(index));
    },
    getInitTodoList: () => {
      dispatch(getInitTodoList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);