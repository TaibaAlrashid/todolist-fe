import { makeAutoObservable } from "mobx";
import tasks from "../tasks";

class TaskStore {
  tasks = tasks;

  constructor() {
    makeAutoObservable(this);
  }
}
const taskStore = new TaskStore();
export default taskStore;
