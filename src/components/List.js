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
     setTodo([...todos, inputValue])
     setInputValue('')
    }
  return (
    <div>
        <h1>Todo List</h1>
       <form>
        <input className='input-list' type="text" value={inputValue} onChange={handleChange} placeholder='add item' />
       
        <button className="submit"  onClick={handleClick}>Add</button>        
      </form>
     <h4>List items</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}
          
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
