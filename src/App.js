import React, { useState } from 'react';
import TodoList from './components/TodoList';
import "./style.css"
import Header from './components/Header';
import Filters from './components/Filters';

function App() {
  const initialTodos = [
    { done: true, text: 'Taste JavaScript' },
    { done: true, text: 'Code furiously' },
    { done: false, text: 'Promote Mavo' },
    { done: false, text: 'Give talks' },
    { done: true, text: 'Write tutorials' },
    { done: false, text: 'Have a life!' },
  ];;

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, { text, done: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (todo) => {
    const updatedTodos = todos.map((t) =>
      t === todo ? { ...t, done: !t.done } : t
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (todo) => {
    const filteredTodos = todos.filter((t) => t !== todo);
    setTodos(filteredTodos);
  };

  return (
    <section className="todoapp">
      <Header
        addTodo={addTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <section className="main">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          activeFilter={activeFilter}
        />
      </section>
      <Filters
        todos={todos}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
