import taskStore from "../stores/taskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter((task) => task.name)
    .map((task) => <TaskItem task={task} />);
  return <div> {taskList}</div>;
};

export default TaskList;
