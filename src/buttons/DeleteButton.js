import taskStore from "../stores/taskStore";

const DeleteButton = (props) => {
  const handleDelete = () => {
    taskStore.deleteTask(props.taskId);
    console.log(props.taskId);
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        type="button"
        class="btn btn-outline-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
