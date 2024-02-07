import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import AddTodo from './AddTodo'


jest.mock('./AddTodo.css', () => ({}));
jest.mock('../ListTodoItems/ListTodoItem.css', () => ({}));

describe('AddTodo.js', () => {
    it('Add todo button should be disabled if input field has no text', () => {
        render(<AddTodo/>)
        const button = screen.getByText('Add Todo')
        const inputField = screen.getByPlaceholderText('Enter new todo');
        fireEvent.change(inputField, { target: { value: '' } });
        expect(button).toHaveProperty('disabled', true)
    })

    it('Add todo button should not be disabled if input field has some text', () => {
        render(<AddTodo/>)
        const button = screen.getByText('Add Todo')
        const inputField = screen.getByPlaceholderText('Enter new todo');
        fireEvent.change(inputField, { target: { value: 'Todo 1' } });
        expect(button).toHaveProperty('disabled', false)
    })
})