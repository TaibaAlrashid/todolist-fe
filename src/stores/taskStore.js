import { makeAutoObservable } from "mobx";
import tasks from "../tasks";
import axios from "axios";

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTask = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.log("fetchTask", error);
    }
  };

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      const deleteTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = deleteTasks;
    } catch (error) {
      console.log(error);
    }
  };

  addTask = (newTask) => {
    this.tasks.push({
      name: newTask,
      id: this.tasks.length + 1,
      status: true,
    });
  };
}
const taskStore = new TaskStore();
taskStore.fetchTask();
export default taskStore;
