import React, { useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

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

  const state = {
    todos: [todos, setTodos],
    addTodo,
    handleDelete,
    handleCheck,
    clearAllTodos,
    handleEdit,
    editBlur,
    editTodo,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
