// App.js
import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import { Container } from 'react-bootstrap'


import './App.css'
const App = () => {
    const [tasks, setTasks] = useState([])

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
        //console.log('task', { tasks }, newTask)
    }
    const removeTask = (index) => {
        setTasks(tasks.filter((item, _index) => index != _index))
    }

    return (
        <Container
            className="p-3 mb-4 rounded-3"
            style={{ backgroundColor: 'pink' }}
        >
            <h1 className="header">Todo App</h1>

                    <AddTask onAddTask={addTask} />

                    <ListTask tasks={tasks} removeTask={removeTask} />


        </Container>
    )
}

export default App
