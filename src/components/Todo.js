import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

function Todo({ id, title, isDone, isEdit }) {
  const editRef = useRef(null);
  const { handleDelete, handleCheck, handleEdit, editBlur, editTodo } =
    useGlobalContext();

  useEffect(() => {
    if (isEdit) {
      editRef.current.focus();
    }
  }, [isEdit]);

  return (
    <li className="todo">
      <div className="todo-text">
        {isEdit ? (
          <input
            type="text"
            name="title"
            id="title"
            ref={editRef}
            value={title}
            onChange={(e) => editTodo(id, e.target.value)}
            onBlur={() => editBlur(id)}
          />
        ) : (
          <label htmlFor={`done${id}`}>
            <input
              type="checkbox"
              name="done"
              id={`done${id}`}
              checked={isDone}
              onChange={() => handleCheck(id)}
            />
            <span className={isDone ? "line-through" : ""}>{title}</span>
          </label>
        )}
      </div>
      <div className="btn-container">
        <button className="edit" onClick={() => handleEdit(id)}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete" onClick={() => handleDelete(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Todo;
