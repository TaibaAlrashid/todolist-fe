import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";
import { TaskWrapper } from "../styles";

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter((task) => task.name)
    .map((task) => <TaskItem task={task} />);
  return <TaskWrapper> {taskList}</TaskWrapper>;
};

export default observer(TaskList);
