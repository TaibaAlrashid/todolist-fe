import "./App.css";
import NewTaskButton from "./buttons/NewTaskButton";
import TaskList from "./components/TaskList";
import {Title} from "./styles";

function App(props) {
  return (
    <div>
      <Title>To Do List</Title>
      {/* <NewTaskButton newTask={props.tasks} /> */}
      <TaskList />
    </div>
  );
}

export default App;
