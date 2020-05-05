import { CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM } from './actionTypes';

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