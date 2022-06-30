import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoListState } from './atoms';
import { filteredTodoListState } from './selectors';

import TodoItem from './todoItem';
import TodoItemCreator from './todoItemCreater';
import TodoListFilters from './todoListFilters';


const TodoList = (props) => {
    const todoList = useRecoilValue(filteredTodoListState); // todoListState, filteredTodoListState

    console.log("todoList: ",todoList);

    return (
      <>
        <TodoListFilters />
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        <TodoItemCreator />
      </>
    );
}

export default TodoList;
