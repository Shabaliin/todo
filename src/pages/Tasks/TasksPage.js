// Импортируем React
// import React from 'react';
// Импортируем CSS
import './TasksPage.css'
// Импортируем компоненты
import Greeting from "../../components/Greeting/Greeting";
import { useState } from 'react'
import ToDo from '../../components/ToDo/ToDo'
import ToDoForm from '../../components/ToDoForm/ToDoForm'

function TasksPage() {
    if(JSON.parse(localStorage.getItem('todos')) === null) {
        localStorage.setItem('todos', JSON.stringify([]))
    }

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
    localStorage.setItem('todos', JSON.stringify(todos))

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false,
                date: new Date().toLocaleString()
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
            )
        ])
    }

    return (
        <div className="TasksPage">
            <header>
                <Greeting/>
            </header>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                        date={todo.date}
                    />
                )
            })}
        </div>
    );
}

export default TasksPage;
