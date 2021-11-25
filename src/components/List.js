import React from "react";
import Todo from "./Todo";
import { useGlobalContext } from "../context";

function List() {
  const value = useGlobalContext();
  const [todos] = value.todos;

  return (
    <main className="todos-container">
      <ul className="todos">
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </ul>
    </main>
  );
}

export default List;
