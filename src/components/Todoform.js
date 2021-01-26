import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      // The code below generates a random number of 10000 so their are no duplicates
      id: Math.floor(Math.random() * 10000),
      // The code below is literally just the text input
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="itinerary"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="todo-button">
        add todo
      </button>
    </form>
  );
}

export default TodoForm;
