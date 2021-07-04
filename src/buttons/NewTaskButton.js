import { useState } from "react";
import taskStore from "../stores/taskStore";
import {TaskWrapper} from "../styles";

const NewTaskButton = () => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    taskStore.addTask(newTask);
  };
  const handleChange = (event) => {
    setNewTask(event.target.value)};
    return (
      <TaskWrapper>
     
      <button  onClick={handleAdd} type="button" class="btn btn-outline-secondary">
      ADD A NEW TASK
      </button>
        <input
          type="text"
          class="form-control"
          placeholder="Add a new task"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handleChange}
        />
      </TaskWrapper>
    );
  
};

export default NewTaskButton;
