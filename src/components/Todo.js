import React, { useRef, useEffect } from "react";

function Todo(props) {
  const {
    id,
    title,
    isDone,
    isEdit,
    handleDelete,
    handleCheck,
    handleEdit,
    editTodo,
    editBlur,
  } = props;

  const editRef = useRef(null);

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
