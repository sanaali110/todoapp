import React from 'react'
import './List.css';

function List({todos, deleteTodo}) {
  
  const handleDelete = (index) => {
    deleteTodo(index)
  }

  if(todos.length === 0){
    return <div>No items in the list</div>
  }

  return (
    <div>
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