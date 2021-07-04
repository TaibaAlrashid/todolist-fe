import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";
import { TaskWrapper, Title } from "../styles";
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
  
    <Title>Done Tasks</Title>{
    doneList.map(task => <TaskItem task={task}/>
    )}
   <Title>Incomplete List</Title>
   { notdoneList.map(task => <TaskItem task={task}/>
    )}
  </TaskWrapper>
 </div>
  );
};

export default observer(TaskList);
