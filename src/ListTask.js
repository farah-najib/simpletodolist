// ListTask.js
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ListTask = ({ tasks, removeTask, editask }) => {

    return (

        <ListGroup>
            {tasks.map((task, index) => (

                <ListGroup.Item key={index}>
                    <Row>
                    <Col>
                    <Form.Control
                        type="text"
                        placeholder={task}
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                    />
</Col>
<Col>
                    <Button variant="danger" onClick={() => removeTask(index)}>
                        {' '}
                        Delete
                    </Button>

                </Col>
                </Row></ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ListTask
