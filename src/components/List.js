import React from "react";
import Todo from "./Todo";

function List({
  todos,
  handleDelete,
  handleCheck,
  handleEdit,
  editTodo,
  editBlur,
}) {
  return (
    <main className="todos-container">
      <ul className="todos">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
              handleEdit={handleEdit}
              editTodo={editTodo}
              editBlur={editBlur}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default List;
