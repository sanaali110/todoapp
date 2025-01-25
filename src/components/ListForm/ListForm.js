import React, { useState } from "react"

const ListForm = ({ todos, updateTodos }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== "") {
            updateTodos(inputValue)
        }
        //...todos: The spread operator (...) creates a new 
        // array that includes all the current items in the
        //  todos array. It is used to ensure the previous items are preserved when adding a new item.
        setInputValue('')
    }

    return (<form>
        <input className='input-list' type="text" value={inputValue} onChange={handleChange} placeholder='add item' />
        <button className="submit" onClick={handleClick}>Add list item</button>
    </form>)
}

export default ListForm