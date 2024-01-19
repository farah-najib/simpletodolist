// AddTask.js
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const AddTask = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('')

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            onAddTask(newTask)
            setNewTask('')
        }
    }

    return (
        <>
            <Row>
                <Col>
                    {' '}
                    <Form.Control
                        sm={8}
                        size="lg"
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                </Col>

                <Col>
                    {' '}
                    <Button sm={4} variant="primary" onClick={handleAddTask}>
                        Add Task
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default AddTask
