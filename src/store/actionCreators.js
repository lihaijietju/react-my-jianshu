import { CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM,INIT_TODO_LIST } from './actionTypes';
import axios from 'axios';

export const getChangeInputValueAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddTodoItemAction = (value) => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteTodoItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

export const getInitTodoList = () => {
  return (dispatch) => {
    axios.get('/getPageList').then((res) => {
      const result = res.data.data;
      const action = {
        type: INIT_TODO_LIST,
        data:result
      }
      dispatch(action);
    }).catch(() => {
    });
	}
}