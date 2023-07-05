import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="add todo"
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add TAsk
      </button>
    </form>
  );
};

export default TodoForm;
