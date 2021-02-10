import React from 'react';
import { Input } from '../Components/input/Input';
import './App.css';
import { Todo } from '../Components/todo/Todo';
import { useSelector } from 'react-redux';
import { selectedTodoList } from '../Components/reducerSlice/reducerSlice';
export const App = () => {
  const todoList = useSelector(selectedTodoList);
  return (
    <div className="app">
      <h1 style={{color: "white", paddingBottom: 10, fontSize: 60}}>Todo App</h1>
      <div className="app_container">
        <div className="app_todoContainer">
          {
            todoList.map(element => (
              <Todo 
                name={element.item}
                id={element.id}
                done={element.done}
              />
              )
            )
          }
        </div>
        <Input />
      </div>
    </div>
  )
}
