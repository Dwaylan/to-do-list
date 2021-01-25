import React, { useState } from "react";
import Todoform from "./Todoform";

function Todolist() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>What't the plan for today?</h1>
    </div>
  );
}

export default Todolist;
