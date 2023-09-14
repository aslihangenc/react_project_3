import React from 'react'

function Filters({ todos, activeFilter, setActiveFilter, clearCompleted }) {
    return (
        <footer className="footer">
            {/* ... */}
            <ul className="filters">
                <li>
                    <a
                        className={activeFilter === 'all' ? 'selected' : ''}
                        onClick={() => setActiveFilter('all')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        className={activeFilter === 'active' ? 'selected' : ''}
                        onClick={() => setActiveFilter('active')}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        className={activeFilter === 'completed' ? 'selected' : ''}
                        onClick={() => setActiveFilter('completed')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button
                hidden={todos.every((todo) => !todo.done)}
                className="clear-completed"
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </footer>
    )
}

export default Filters