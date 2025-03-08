import React, { useRef } from "react"

/*
* List form controls only the storage of new todo to be added to list
*/
const ListForm = ({ updateTodos }) => {
    // It will just create a pointer to the input field
    const inputRef = useRef()

    const handleClick = (e) => {
        e.preventDefault()
        console.log('input value', inputRef.current.value)
        const inputValue = inputRef.current.value
        if (inputValue.trim() !== "") {
            updateTodos(inputValue)
        }
    }

    return (<form>
        <input ref={inputRef} className='input-list' type="text" placeholder='add item' />
        <button className="submit" onClick={handleClick}>Add list item</button>
    </form>)
}

export default ListForm