import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        addTask(description);
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;