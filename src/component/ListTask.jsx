import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "./Task";
const ListTask=()=>{
    const listTasks=useSelector((state)=>state.task.listTasks)
    const [status,setStatus]=useState("all")
    return(
        
        <div >
        <Button  variant="success" style={{margin:"10px 50px", color:"wheat" , background:"black" , borderRadius:"10px" , padding:"10px" , width:"100px"}} onClick={()=>setStatus("all")}>all</Button>
        <Button variant="info" style={{margin:"10px 50px", color:"wheat" , background:"black" , borderRadius:"10px" , padding:"10px" , width:"100px"}} onClick={()=>setStatus("done")}>done</Button>
        <Button variant="warning" style={{margin:"10px 50px", color:"wheat" , background:"black" , borderRadius:"10px" , padding:"10px" , width:"100px"}} onClick={()=>setStatus("unDone")}>unDone</Button>
        <div>
            {status==="done"?listTasks.filter((el)=>el.isDone===true).map((el)=><Task task={el} key={el.id}/>):
            status==="unDone"? listTasks.filter((el)=>el.isDone===false)
        .map(el=><Task task={el} key={el.id}/>)
    :listTasks.map(el=><Task task={el} key={el.id}/>)}
        </div>
        </div>
    )
}
export default ListTask