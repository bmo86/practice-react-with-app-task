import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TContext } from "../context/TContext";

function TaskList() {
  const { tasks } = useContext(TContext);

  if (tasks.length === 0) {
    return (
      <div className=" container bg-gray-900 p-5 rounded-full text-center">
        <h1 className="text-white text-4xl font-bold">No hay Tareas</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5 gap-2 p-4 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
