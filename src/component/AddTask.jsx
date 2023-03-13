import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";

const AddTask=()=>{
    
const [text,setText]=useState("");
const dispatch=useDispatch();
const handleChange=(e)=>{
  e.preventDefault()
  
  if (text){
  dispatch (addTask({id:Math.random,text :text,isDone :false}))}
  else{
    alert("can't add an empty task")
  }
}
    return(
    <div>


      
        <Modal.Body>
        <Form onSubmit={handleChange}>
        <div >
        <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Control style={{color:"blue"}} onChange={(e)=>setText(e.target.value)}value={text} type="text" placeholder="add Task" />
        </Form.Group>
        <Button   variant="primary" onClick={handleChange} type="submit">
        Add
      </Button>
      </div>
    </Form></Modal.Body>
    </div>
    )
}
export default AddTask;