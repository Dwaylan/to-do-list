import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="Todo-app">
      <h1>Dway's To do app</h1>
      <TodoList />
    </div>
  );
}

export default App;
