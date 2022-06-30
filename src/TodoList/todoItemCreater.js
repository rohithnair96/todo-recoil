import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atoms';

// utility for creating unique Id
let id = 0;
function getId() {
    return id++;
}

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [message, setMessage] = React.useState('');
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
        if(inputValue){
            setTodoList((oldTodoList) => [
                ...oldTodoList,
                {
                id: getId(),
                text: inputValue,
                isComplete: false,
                },
            ]);
            setInputValue('');
        } else {
            setMessage('Invalid Input');
            setTimeout(() => setMessage(''),2000);
        }
    };
  
    const onChange = ({ target: { value } }) => {
      setInputValue(value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
        <div>{message}</div>
      </div>
    );
  }

export default TodoItemCreator
