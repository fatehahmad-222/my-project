"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Fetch Todos (GET)
  const fetchTodos = async () => {
    const res = await fetch("process.env.NEXT_PUBLIC_API_URL/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add Todo (POST)
  const addTodo = async () => {
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    setText("");
    fetchTodos();
  };

  // Update Todo (PUT)
  const updateTodo = async (id) => {
    const newText = prompt("Enter new text:");
    if (!newText) return;

    await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ id, text: newText }),
    });
     
    fetchTodos();
  };

  // Delete Todo (DELETE)
  const deleteTodo = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    fetchTodos();
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Next.js CRUD App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => updateTodo(todo.id)}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}