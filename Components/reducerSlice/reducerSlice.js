import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const reducerSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if(action.payload === item.id) {
                    if (item.done) {
                        item.done = false;
                    }
                    else {
                        item.done = true;
                    }
                }
                return item;
            })
        }, 
        removeTodo: (state, action) => {
            return {...state, todoList: state.todoList.filter(element => element.id !== action.payload)}
            }
    }
});

export const { saveTodo, setCheck, removeTodo } = reducerSlice.actions
export default reducerSlice.reducer
export const selectedTodoList = state => state.todos.todoList;