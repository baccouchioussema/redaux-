import {DONE_TASK,DELETE_TASK,ADD_TASK,EDIT_TASK} from "../constant/actionsTypes";

const initialState={
    listTasks:[
        {
            id:0,
            text:"oussema",
            isDone:true
        },
        {
            id:1,
            text:"oussema",
            isDone:false
        }
    ]
}
const TaskReducer=(state=initialState,{type,payload})=>{
    switch (type){
        case ADD_TASK:
        return {...state,listTasks:[...state.listTasks,payload]}
        case EDIT_TASK:
        return {...state,listTasks:state.listTasks.map((el)=>el.id===payload.id ? {...el,text:payload.newTask}: el)}
        case DELETE_TASK:
            return{...state,listTasks:state.listTasks.filter(el=>el.id!==payload)}
        case DONE_TASK:
            return{...state,listTasks:state.listTasks.map((el)=>el.id===payload ? {...el,isDone:!el.isDone}:el)}
    
    default :return state
}}
export default TaskReducer