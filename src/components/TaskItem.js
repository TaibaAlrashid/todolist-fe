import { observer } from "mobx-react";
import DeleteButton from "../buttons/DeleteButton";
import taskStore from "../stores/taskStore";


// default => true done , false not done 
const TaskItem = (props) => {
const handleClick = () => {
  if (props.task.status === true){
    props.task.status = false 
  taskStore.updateStatus(props.task)
  }else{
    props.task.status = true 
  taskStore.updateStatus(props.task)
  }
}
  return (
   
   <div>
      <center>
        
        <a class="list-group-item list-group-item-action list-group-item-light">
        {props.task.name}
        </a>
        <button onClick = {handleClick} type="button" class="btn btn-outline-primary">

          {props.task.status ? "Not Done": "Done" }
        </button>
        <DeleteButton taskId={props.task.id} />
      </center>
    </div>
  );
};

export default observer(TaskItem);
