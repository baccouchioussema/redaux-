import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editTask } from "../JS/actions/actions";
import { useDispatch } from "react-redux";

function Edit({task}) {
  const [show, setShow] = useState(false);
  const [newText,setNewText]=useState(task.text)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const handleEdit=()=> {
  dispatch(editTask(task.id,newText))
  }
  return (
    <>
      <Button style={{justifyContent:"space-between" , width:"100px" , background:"green"}}   onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add Task</Form.Label>
        <Form.Control value={newText} onChange={(e)=>setNewText(e.target.value)} type="text" placeholder="add Task" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleEdit();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Edit