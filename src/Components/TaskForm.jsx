import { useState, useContext } from "react";
import { TContext } from "../context/TContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TContext);

  const handlerSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handlerSubmit}
        className="bg-slate-700 p-5 mb-4 rounded-3xl"
      >
        <h1 className="text-2xl font-bold text-white mt-2 mb-4">Create Task</h1>
        <input
          placeholder="write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-200 p-3 w-full mb-2 rounded-md text-black"
        ></input>
        <textarea
          placeholder="write your description task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-200 p-3 w-full mb-2 rounded-md text-black"
        ></textarea>
        <button className="bg-green-800 hover:bg-green-500 rounded-full px-5 py-2 text-white font-bold">
          Save
        </button>
      </form>
    </div>
  );
}
