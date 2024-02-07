import React, { useState } from 'react'
import ListTodoItem from '../ListTodoItems/ListTodoItem'
import './AddTodo.css'

const AddTodo = () => {
    const [inputText, setInputText] = useState('')
    const [todo, setTodo] = useState([])

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const handleAddTodo = () => {
            setTodo([...todo, {text: inputText, completed: false }])
            setInputText('')
    }

    const handleToggleComplete = (index) => {
        console.log(index)
        const todoList = [...todo]
        todoList?.[index]?.completed = !todoList?.[index]?.completed
        setTodo(completedTodo)
    }

    return(
        <>
        <div className='add-todo-container'>
            <h1>ADD NEW TODO</h1>
            <input type='text' value={inputText} onChange={handleInputChange} placeholder='Enter new todo'/>
            <button type='button' onClick={handleAddTodo} disabled={inputText === ''}> Add Todo </button>
        </div>

        <div className='list-todo-container'>
            <ListTodoItem todoList= {todo} handleToggleComplete={handleToggleComplete}/>
        </div>
        </>
    )
}

export default AddTodo