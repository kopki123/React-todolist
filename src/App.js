import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleDelete = (id) => {
    if (window.confirm("確定刪除?")) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    }
  };

  const handleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const clearAllTodos = () => {
    const newTodos = todos.filter((todo) => todo.isDone !== true);
    setTodos(newTodos);
  };

  const addTodo = (title) => {
    if (!title) {
      alert("請輸入文字");
      return;
    }
    const newTodo = {
      id: nanoid(),
      title: title,
      isDone: false,
      isEdit: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const handleEdit = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEdit: true };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const editTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: title };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const editBlur = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.title === "") {
          window.alert("請輸入文字");
          return { ...todo, isEdit: true };
        }
        return { ...todo, isEdit: false };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list">
      <Header addTodo={addTodo} />
      <List
        todos={todos}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        editTodo={editTodo}
        editBlur={editBlur}
      />
      {todos.length > 0 && (
        <Footer todos={todos} clearAllTodos={clearAllTodos} />
      )}
    </div>
  );
}

export default App;
