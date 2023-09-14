import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, activeFilter }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) =>
                (activeFilter === 'all' ||
                    (activeFilter === 'active' && !todo.done) ||
                    (activeFilter === 'completed' && todo.done)) && (
                    <TodoItem
                        key={todo.text}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            )}
        </ul>
    );
}

export default TodoList;
