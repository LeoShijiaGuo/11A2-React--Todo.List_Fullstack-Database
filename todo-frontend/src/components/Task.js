import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={task.isCompleted} 
                onChange={() => toggleTask(task._id)} 
            />
            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                {task.description}
            </span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
        </div>
    );
};

export default Task;