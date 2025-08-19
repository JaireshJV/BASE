import React, {  useState } from "react";

const API = "http://localhost:4000/api/tasks";

export const TasksTable=({tasks,load})=> {

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "" });

  // start editing
  const startEdit = (task) => {
    setEditingId(task._id);
    setEditForm({ title: task.title, description: task.description || "" });
  };

  // cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: "", description: "" });
  };

  // submit update
  const submitEdit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    if (!res.ok) return alert("Update failed");
    await load();
    cancelEdit();
  };

  // delete
  const remove = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    const res = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (!res.ok) return alert("Delete failed");
    await load();
  };

  return (
    <div style={{ width: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Tasks</h2>

      {/* LIST */}
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {tasks.map((t) => (
          <li
          key={t._id}
          style={{ border: "1px solid #ddd", borderRadius: 6, padding: 12 }}
        >
          {editingId === t._id ? (
            <form onSubmit={submitEdit} style={{ display: "grid", gap: 8 }}>
              <input
                type="text"
                value={editForm.title}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, title: e.target.value }))
                }
                placeholder="Title"
                required
              />
              <input
                type="text"
                value={editForm.description}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, description: e.target.value }))
                }
                placeholder="Description"
              />

              <div style={{ display: "flex", gap: 8 }}>
                <button type="submit">Save</button>
                <button type="button" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h4 style={{ margin: "0 0 6px" }}>{t.title}</h4>
              <p style={{ margin: 0, color: "#555" }}>{t.description}</p>

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => startEdit(t)}>Edit</button>
                <button onClick={() => remove(t._id)}>Delete</button>
              </div>
            </>
          )}
        </li>
        ))}
      </ul>
    </div>
  );
}
