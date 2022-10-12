import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from "react-bootstrap";

export default function AddNodeForm({ setAddItem, addItem, tasks, setTasks }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(False);
  const handleClose = () => setShow(False);
  const handleShow = () => setShow(True);

  <Button className='nextButton' onClick={handleShow}>
    Open Modal
  </Button>;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      id: uuidv4(),
      name: name,
      description: description,
      timeline: option,
    };
    setTasks([...tasks, newTask]);
    setAddItem(!addItem);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className='addForm'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type='text'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
              />
              <button type='submit'>Add</button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
