import React from "react";
import Button from 'react-bootstrap/Button';
import { deleteTask,doneTask } from "../JS/actions/actions";
import { useDispatch } from "react-redux";
import Edit from "./EditTask";
const Task=({task})=>{
const dispatch=useDispatch();
    return(
     <div style={{margin:"5px 20px 0 0",borderBottom:"1px solid black",padding:"5px",}}>
        <span style={{marginRight :"50px"}}  className={task.isDone? "null":"done"}>{task.text}</span>
        <Edit style={{ color:"wheat" , background:"black" , borderRadius:"10px" , padding:"10px" , width:"100px"}}   task={task}/>
        <Button style={{marginLeft :"120px" , color:"wheat" , background:"red" , borderRadius:"10px" , padding:"10px" , width:"100px"}}  variant="danger" onClick={()=>dispatch(deleteTask(task.id))}  >delete</Button>
        <Button style={{marginLeft :"140px" , color:"wheat" , background:"blue" , borderRadius:"10px" , padding:"10px" , width:"100px"}}  onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ?"Done":"unDone" } </Button>
     
     </div>
    )
}
export default Task