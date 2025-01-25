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