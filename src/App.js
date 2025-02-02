import React, { useState } from "react"
import './App.css';
import List from './components/List/List';
import ListForm from './components/ListForm/ListForm';
import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/Clock/Clock";

/*  
  [{
    id: 1,
    todoValue: "todo1"
  }]
*/

function App() {
  const [todos, setTodos] = useState([]);
  const [count,setCount] = useState({
    key: "counter",
    value: 0
  });

  const updateTodos = (todo) => {
    const newTodo = {
      id:todo.length,
      value: todo
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (index) => {
    /* 
     * ...todos: The spread operator (...) creates a new 
     * array that includes all the current items in the
     * todos array. It is used to ensure the previous items are preserved when adding a new item.
     */
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  console.log('render app',count)
 

  return (
    <div className="App">
      <h1>Todo List {count.key} - {count.value}</h1>
      <Welcome name="world" />
      <Clock />
      <ListForm updateTodos={updateTodos} />
      <List todos={todos} deleteTodo={deleteTodo} />
      <button onClick={() => setCount({...count,value: count.value+1})}>Increment counter</button>
    </div>
  );
}

export default App;