import React, { useState } from "react"
import './App.css';
import List from './components/List/List';
// import ListForm from './components/ListForm/ControlledListForm';
import ListForm from './components/ListForm/UncontrolledListForm';
import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/Clock/Clock";
import FancyBorder from "./components/FancyBorder/FancyBorder";
import SplitView from "./components/SplitView/SplitView";
import Dialog from "./components/Dialog/Dialog";

/*  
  [{
    id: 1,
    todoValue: "todo1"
  }]
*/

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState({
    key: "counter",
    value: 0
  });

  const updateTodos = (todo) => {
    const newTodo = {
      id: todo.length,
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

  return (
    <div className="App">
      <h1>Todo List {count.key} - {count.value}</h1>
      {/* <FancyBorder>
        <Welcome name="world" />
      </FancyBorder> */}
      {/* <FancyBorder color={"red"}>
        <Clock />
      </FancyBorder> */}
      <Dialog title={"Todos"} message="list of all the todos we created"/>
      <SplitView leftContent={(<Welcome name="world" />)} rightContent={(<Clock />)}/>
      <FancyBorder>
        <ListForm updateTodos={updateTodos} />
        <List todos={todos} deleteTodo={deleteTodo} />
        <button onClick={() => setCount({ ...count, value: count.value + 1 })}>Increment counter</button>
      </FancyBorder>
      
    </div>
  );
}

export default App;