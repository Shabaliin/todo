import { useState } from 'react'
import './ToDoForm.css'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput.trim())
        setUserInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-form__input'
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Добавить задачу"
            />
            <button className='todo-form__button'>Добавить</button>
        </form>
    )
}

export default ToDoForm