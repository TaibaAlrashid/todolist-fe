import { useState } from "react";
import taskStore from "../stores/taskStore";

const NewTaskButton = () => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    taskStore.addTask(newTask);
  };
  const handleChange = (event) => {
    setNewTask(event.target.value)};
    return (
      <div>
        <button onClick={handleAdd}>ADD A NEW TASK</button>
        <input
          type="text"
          class="form-control"
          placeholder="Add a new task"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handleChange}
        />
      </div>
    );
  
};

export default NewTaskButton;
