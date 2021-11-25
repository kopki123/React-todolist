import React from "react";
import { useGlobalContext } from "./context";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const value = useGlobalContext();
  const [todos] = value.todos;

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <Header />
      <List />
      {todos.length > 0 && <Footer />}
    </div>
  );
}

export default App;
