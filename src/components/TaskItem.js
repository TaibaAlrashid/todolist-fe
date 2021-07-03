import { observer } from "mobx-react";
import DeleteButton from "../buttons/DeleteButton";

const TaskItem = (props) => {
  return (
    <div>
      <center>
        <li className="list-group-item list-group-item-primary">
          {props.task.name}
        </li>
        <button type="button" class="btn btn-outline-primary">
          Done
        </button>
        <DeleteButton taskId={props.task.id} />
      </center>
    </div>
  );
};

export default observer(TaskItem);
