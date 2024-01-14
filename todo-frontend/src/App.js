import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('https://tranquil-wildwood-54321-d6b7d1300d99.herokuapp.com/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (description) => {
        try {
            const response = await axios.post('https://tranquil-wildwood-54321-d6b7d1300d99.herokuapp.com/api/tasks', { description });
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const toggleTask = async (id) => {
        try {
            await axios.patch(`https://tranquil-wildwood-54321-d6b7d1300d99.herokuapp.com/api/tasks/${id}`);
            setTasks(tasks.map(task => task._id === id ? { ...task, isCompleted: !task.isCompleted } : task));
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`https://tranquil-wildwood-54321-d6b7d1300d99.herokuapp.com/api/tasks/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="App">
            <h1>Todo List That Saved in SQL</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default App;