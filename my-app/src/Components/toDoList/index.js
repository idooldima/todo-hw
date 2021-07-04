import React, { useState } from "react";

function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div
      key={todo.id}
      className={todo.complete ? "item-todo-complete" : "item-todo"}
    >
      <div className="item-text" onClick={() => toggleTask(todo.id)}>
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
}

export default ToDo;
