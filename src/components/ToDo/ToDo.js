import './ToDo.css'

function ToDo({todo, toggleTask, removeTask, date}) {
    return (
        <div className="item-todo-wrapper">
            <div className='todo-item__title'>{date}</div>
            <div key={todo.id} className="item-todo-wrapper__item">
                <div
                    className={todo.complete ? "item-text strike" : "item-text"}
                    onClick={() => toggleTask(todo.id)}
                >
                    {todo.task}
                </div>
                <div className="item-delete" onClick={() => removeTask(todo.id)}>X</div>
            </div>
        </div>
    )
}

export default ToDo