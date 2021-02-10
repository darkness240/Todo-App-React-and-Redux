import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {saveTodo}  from '../reducerSlice/reducerSlice';
import './input.css';
export function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodo = () => {
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }));
        setInput("");
    }
    return (
        <div className="input" >
            <input type="text" value={input} onKeyDown= {(e) => e.key === "Enter" && input !== "" ? addTodo() : 0} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    )

}