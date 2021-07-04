import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";
import { TaskWrapper } from "../styles";
import NewTaskButton from "../buttons/NewTaskButton";


const TaskList = () => {
  const doneList = taskStore.tasks
      .filter((task) => task.status === true);
  const notdoneList = taskStore.tasks
      .filter((task) => task.status === false);

  
  return (
    
 <div>
 <NewTaskButton/>
    <TaskWrapper> 
  {
    doneList.map(task => <TaskItem task={task}/>
    )}
   <h1>Not Done List</h1>
   { notdoneList.map(task => <TaskItem task={task}/>
    )}
  </TaskWrapper>
 </div>
  );
};

export default observer(TaskList);
