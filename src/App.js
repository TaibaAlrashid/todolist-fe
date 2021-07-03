import "./App.css";
import NewTaskButton from "./buttons/NewTaskButton";
import TaskList from "./components/TaskList";

function App(props) {
  return (
    <div>
      <h1>To Do List</h1>
      {/* <NewTaskButton newTask={props.tasks} /> */}
      <TaskList />
    </div>
  );
}

export default App;
