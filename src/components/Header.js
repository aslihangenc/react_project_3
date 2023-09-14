import React from 'react'

function Header({ addTodo, newTodo, setNewTodo }) {
    return (
        <header className="header">
            <h1>todos</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(newTodo);
                }}
            >
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </form>
        </header>
    )
}

export default Header