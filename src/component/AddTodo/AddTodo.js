import React, { useState, useMemo } from 'react'
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
        const completedTodo = [...todo]
        completedTodo[index].completed = !completedTodo[index].completed 
        setTodo(completedTodo)
    }

    const completedTodoCount = useMemo(() => {
        return todo.filter(todo => todo.completed).length;
      }, [todo]);

    return(
            <>
                <div className='add-todo-container'>
                    <h1>ADD NEW TODO</h1>
                    <input type='text' value={inputText} onChange={handleInputChange} placeholder='Enter new todo'/>
                    <button type='button' onClick={handleAddTodo} disabled={inputText === ''}> Add Todo </button>
                </div>

                <div className='todo-container'>
                    <div className='list-todo-container'>
                        <ListTodoItem todoList= {todo} handleToggleComplete={handleToggleComplete}/>
                    </div>

                    <div>
                        <h4>Number of completed To Do items: {completedTodoCount}</h4>
                    </div>
                </div>
            </>
    )
}

export default AddTodo