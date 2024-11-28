
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList component', () => {
        render(<TodoList />);
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    });

    test('allows users to add a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const button = screen.getByText(/Add Todo/i);

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('allows users to toggle a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    test('allows users to delete a todo', () => render(<TodoList />));
        const todoItem = screen.getByText('Learn React');
        const deleteButton = todoItem.nextSibling; // Assuming the delete button is the next sibling

        fireEvent.click(deleteButton);
        expect(todoItem).not.toBeInTheDocument();
    });
