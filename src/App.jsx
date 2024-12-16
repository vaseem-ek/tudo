import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

 
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };


  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5 w-75">
      <h1 className="text-center mb-4">Todo</h1>

    
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>

   
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {editIndex === index ? (
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="btn btn-success" onClick={saveEdit}>
                  Save
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditIndex(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span>{todo}</span>
                <div>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => startEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="text-center mt-4">No todos yet!</p>}
    </div>
  );
}

export default App;

