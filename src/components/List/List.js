import React from 'react'
import './List.css';

/*
* List will just render the list of todos
*/
function List({todos, deleteTodo}) {
  
  const handleDelete = (index) => {
    deleteTodo(index)
  }

  if(todos.length === 0){
    return <div>No items in the list</div>
  }

  console.log('render list')
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