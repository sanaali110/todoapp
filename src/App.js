import React, { useState } from "react"
import './App.css';
import List from './components/List/List';
import ListForm from './components/ListForm/ListForm';

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodos = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (index) => {
    /* ...todos: The spread operator (...) creates a new 
     * array that includes all the current items in the
     * todos array. It is used to ensure the previous items are preserved when adding a new item.
     */
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ListForm updateTodos={updateTodos} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;