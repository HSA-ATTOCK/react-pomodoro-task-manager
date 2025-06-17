import React, { useState } from "react";

function TaskList({ tasks, setTasks }) {
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          text,
          done: false,
          createdAt: new Date().toISOString(), // ⏱️ Creation Time
          completedAt: null, // ✅ Completion Time (null by default)
          dueDate: dueDate || null, // 📆 Optional Due Date
          dueTime: dueTime || null, // ⏰ store time
        },
      ]);
      setText(""); // reset input
      setDueDate(""); // reset due date
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    const task = updated[index];
    task.done = !task.done;
    task.completedAt = task.done ? new Date().toISOString() : null;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const uncompletedCount = tasks.filter((task) => !task.done).length;
  const completedCount = tasks.filter((task) => task.done).length;

  return (
    <div className="task-list">
      <input
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <input
        type="time"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        <h2>📋 Uncompleted Tasks ({uncompletedCount})</h2>
        {tasks.map((task, index) =>
          !task.done ? (
            <li
              key={index}
              style={{
                background: "#fff3e0",
                borderLeft: "6px solid #ffb74d",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ flexGrow: 1 }}>{task.text}</span>
                <div>
                  <button onClick={() => toggleDone(index)}>✅ Complete</button>
                  <button
                    onClick={() => removeTask(index)}
                    style={{ marginLeft: "8px" }}
                  >
                    ❌
                  </button>
                </div>
              </div>
              <div
                style={{ fontSize: "12px", marginTop: "4px", color: "#555" }}
              >
                📅 Created: {new Date(task.createdAt).toLocaleString()} <br />
                🗓️ Due:{" "}
                {task.dueDate && task.dueTime
                  ? new Date(`${task.dueDate}T${task.dueTime}`).toLocaleString(
                      "en-GB",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )
                  : "Not set"}
              </div>
            </li>
          ) : null
        )}

        <h2>✅ Completed Tasks ({completedCount})</h2>
        {tasks.map((task, index) =>
          task.done ? (
            <li
              key={index}
              style={{
                background: "#e8f5e9",
                borderLeft: "6px solid #81c784",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ flexGrow: 1, textDecoration: "line-through" }}>
                  {task.text}
                </span>
                <div>
                  <button onClick={() => toggleDone(index)}>↩️ Undo</button>
                  <button
                    onClick={() => removeTask(index)}
                    style={{ marginLeft: "8px" }}
                  >
                    ❌
                  </button>
                </div>
              </div>
              <div
                style={{ fontSize: "12px", marginTop: "4px", color: "#555" }}
              >
                📅 Created: {new Date(task.createdAt).toLocaleString()} <br />
                🗓️ Due:{" "}
                {task.dueDate && task.dueTime
                  ? new Date(`${task.dueDate}T${task.dueTime}`).toLocaleString(
                      "en-GB",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )
                  : "Not set"}{" "}
                <br />✅ Completed:{" "}
                {task.completedAt
                  ? new Date(task.completedAt).toLocaleString()
                  : ""}
              </div>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default TaskList;
