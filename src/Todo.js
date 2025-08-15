// Todo.js
import React from 'react';
import './App.css';
//import './style.css';

export default function Todo({ id, todo, onDelete, onEdit }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <div className="btn-group">
        <button className="btn delete" onClick={() => onDelete(id, todo)}>
          Delete
        </button>
        <button className="btn edit" onClick={() => onEdit(id)}>
          Edit
        </button>
      </div>
    </li>
  );
}
