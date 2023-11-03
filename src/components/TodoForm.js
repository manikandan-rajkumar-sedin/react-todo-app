import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    if (!value.length) {
      return;
    }
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Task assigned for the day?"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
