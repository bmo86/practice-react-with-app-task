import { useContext } from "react";
import { TContext } from "../context/TContext";
function TaskCard({ task }) {
  const { deleteTask } = useContext(TContext);

  return (
    <>
      <div className="bg-blue-800 bg-opacity-10 text-white rounded-md">
        <h1 className="text-xl font-bold capitalize ml-1 mt-2">{task.title}</h1>
        <p className="text-gray-500 text-sm ml-2">{task.description}</p>
        <button
          className="bg-red-500 rounded-md px-2 py-2 mt-4 ml-3 mb-3 hover:bg-red-200"
          onClick={() => deleteTask(task.id)}
        >
          Delete Task
        </button>
      </div>
    </>
  );
}

export default TaskCard;
