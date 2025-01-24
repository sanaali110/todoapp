import React from 'react'
import './List.css';
import { useState } from 'react';

function List() {
    const [todos,setTodo] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value); 
    }
    function handleClick(e){
     e.preventDefault()
    if(inputValue.trim() !== ""){
      setTodo([...todos, inputValue])
    }
     //...todos: The spread operator (...) creates a new 
     // array that includes all the current items in the
     //  todos array. It is used to ensure the previous items are preserved when adding a new item.
     setInputValue('')
    }

     function handleDelete(index){
       const newTodos = [...todos];
       newTodos.splice(index, 1);
       setTodo(newTodos);
    }
  return (
    <div>
        <h1>Todo List</h1>
       <form>
        <input className='input-list' type="text" value={inputValue} onChange={handleChange} placeholder='add item' />
       
        <button className="submit"  onClick={handleClick}>Add list item</button>     
      </form>
     <h4>List items</h4>
      <ul>
        {todos.map((todo, index) => (
          <li className='list-item' key={todo}>{todo}
          <button className='delete-list' onClick={() => handleDelete(index)}>Delete</button>
          </li>
         
        ))}
      </ul>
    </div>
  )
}

export default List
