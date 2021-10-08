import React, { useRef } from "react";

function Header({ addTodo }) {
  const todoRef = useRef(null);

  const handleAdd = () => {
    addTodo(todoRef.current.value);
    todoRef.current.value = "";
  };

  return (
    <header className="todo-header">
      <div className="todo-form">
        <label htmlFor="todo-input">
          <span className="label-text">項目:</span>
        </label>
        <input type="text" name="todo-input" id="todo-input" ref={todoRef} />
      </div>
      <button onClick={handleAdd}>送出</button>
    </header>
  );
}

export default Header;
