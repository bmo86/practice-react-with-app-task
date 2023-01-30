import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/task";
export const TContext = createContext();

export function TContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TContext.Provider>
  );
}
