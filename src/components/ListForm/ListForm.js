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
        setInputValue('')
    }

    return (<form>
        <input className='input-list' type="text" value={inputValue} onChange={handleChange} placeholder='add item' />
        <button className="submit" onClick={handleClick}>Add list item</button>
    </form>)
}

export default ListForm