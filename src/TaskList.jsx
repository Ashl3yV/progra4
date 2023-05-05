import Task from "./Task";
  
function TaskList(props){
    const tasks = props.tasks.map(task =>(<Task keyValue = {task.id} name={task.name}/>));
    return <ul>{tasks}</ul>
  }
  export default TaskList;