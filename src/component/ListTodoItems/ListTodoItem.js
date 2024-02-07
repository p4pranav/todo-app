import React from 'react'
import './ListTodoItem.css'

const ListTodoItem = ({todoList, handleToggleComplete}) => {
    return(
        <div className='list-container'>
            <h3>List of Todo's</h3>
            {
                todoList?.map((list, index) => (
                    <div key={index} className='todo-list'>
                        <input
                        type="checkbox"
                        // checked= {}
                        onChange={() => handleToggleComplete(index)}
                    />
                    <p>{list.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ListTodoItem