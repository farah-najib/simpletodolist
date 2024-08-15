// App.js
import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import { Container } from 'react-bootstrap'
import GitHubCorner from 'react-github-corner'; // Import GitHubCorner


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
        <div className="d-flex flex-column min-vh-100">
        <Container
            className="p-3 mb-4 rounded-3"
            style={{ backgroundColor: 'pink' }}
        >
            <h1 className="header">Todo App</h1>

                    <AddTask onAddTask={addTask} />

                    <ListTask tasks={tasks} removeTask={removeTask} />


        </Container>
        <GitHubCorner href="https://github.com/farah-najib/simpletodolist"
            bannerColor="#000"  // Background color of the ribbon
            octoColor="#fff"        // Color of the octocat
            size={80}               // Size of the ribbon
            direction="right" />
        </div>
    )
}

export default App
