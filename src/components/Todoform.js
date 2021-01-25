import React, { useState } from "react";

function Todoform(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   text: input,
    // });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a to-do, you fool"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">add todo</button>
    </form>
  );
}

export default Todoform;
