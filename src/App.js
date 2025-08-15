//simport logo from './logo.svg';


// App.js
import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';
//import './style.css';

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [toggleUpdate, setToggleUpdate] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  const addTodo = () => {
    if (!input.trim()) {
      alert('Please enter a value');
    } else if (input && !toggleUpdate) {
      const updatedList = list.map((item) =>
        item.id === isEdit ? { ...item, todo: input } : item
      );
      setList(updatedList);
      setToggleUpdate(true);
      setInput('');
      setIsEdit(null);
    } else {
      const newTodo = {
        id: Math.random(),
        todo: input,
      };
      setList([...list, newTodo]);
      setInput('');
    }
  };

  const deleteTodo = (id, todo) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
    alert(`${todo} is deleted`);
  };

  const editTodo = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setInput(itemToEdit.todo);
    setIsEdit(id);
    setToggleUpdate(false);
  };

  return (
    <div className="app-container">
      <h2>Todo App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>
          {toggleUpdate ? 'Add Todo' : 'Update Todo'}
        </button>
      </div>

      <ul className="todo-list">
        {list.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            todo={item.todo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
