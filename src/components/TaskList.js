import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";
import { TaskWrapper } from "../styles";

const TaskList = () => {
  const doneList = taskStore.tasks
      .filter((task) => task.status === true);
  const notdoneList = taskStore.tasks
      .filter((task) => task.status === false);

  
  return <TaskWrapper> {
    doneList.map(task => <TaskItem task={task}/>
    )}

<h1>Not Done List</h1>

   { notdoneList.map(task => <TaskItem task={task}/>
    )}
  </TaskWrapper>;
};

export default observer(TaskList);
