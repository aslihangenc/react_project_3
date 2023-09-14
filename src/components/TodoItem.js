import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className={todo.done ? 'completed' : ''}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo)}
                />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => deleteTodo(todo)}></button>
            </div>
        </li>
    );
}

export default TodoItem;
