import React, { useEffect, useState } from "react";
import { TasksTable } from "./TaskTable";

const Task = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState([]);

  const API = "http://localhost:4000/api/tasks";

  // fetch all
  const load = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleOnChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "" });
    load();
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          width: "250px",
          margin: "0px auto",
          marginTop: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <h1>ADDING TASK</h1>
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleOnChange}
            style={{ padding: "10px", marginBottom: "20px" }}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleOnChange}
            style={{ padding: "10px" }}
          />
          <button type="submit" style={{ marginTop: "20px" }}>
            ADD TASK
          </button>
        </div>
      </form>
      <TasksTable tasks={tasks} load={load} />
    </div>
  );
};

export default Task;
