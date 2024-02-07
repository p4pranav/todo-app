import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import AddTodo from './AddTodo'



describe('AddTodo.js', () => {
    it('Add todo button should be disabled if input field has no text', () => {
        render(<AddTodo/>)
        const button = screen.getByText('Add Todo')
        const inputField = screen.getByPlaceholderText('Enter new todo');
        fireEvent.change(inputField, { target: { value: '' } });
        expect(button).toBeDisabled()
    })
})