"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function RemoveBtn({ id }) {
  const removeTask = async () => {
    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  };

  const handleRemove = () => {
    removeTask().then((res) => {
      console.log("Deleted");
    });
  };

  return (
    <button className="text-lg text-red-400" onClick={() => handleRemove()}>
      Delete
    </button>
  );
}
// import { HiPencilAlt } from "react-icons/hi";

const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tasks: ", error);
  }
};

export default function TasksList() {
  // const { tasks } = await getTasks();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => {
      if (res.tasks) {
        setTasks(res.tasks);
      }
    });
  }, []);

  return (
    <>
      {tasks.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTask/${t._id}`} className="text-lg text-red-600">
              Edit
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
