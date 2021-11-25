import React, { useState } from "react";
import { useGlobalContext } from "../context";

function Header() {
  const value = useGlobalContext();
  const addTodo = value.addTodo;
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <header className="todo-header">
      <div className="todo-form">
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>送出</button>
    </header>
  );
}

export default Header;
