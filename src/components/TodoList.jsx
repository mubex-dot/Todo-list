import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = { task: inputValue, status: "Not Started" };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleStatus = (index, status) => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.status = status;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].task);
  };

  const updateTodo = () => {
    if (editValue.trim() !== "") {
      const newTodos = [...todos];
      newTodos[editIndex].task = editValue;
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setEditIndex(-1);
      setEditValue("");
    }
  };

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (selectedCheckbox === "completed") {
      return todo.status === "Completed";
    } else if (selectedCheckbox === "inProgress") {
      return todo.status === "In Progress";
    } else if (selectedCheckbox === "notStarted") {
      return todo.status === "Not Started";
    }
    return true;
  });

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="inputbar">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        <div>
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedCheckbox === "all"}
              onChange={handleCheckboxChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="completed"
              checked={selectedCheckbox === "completed"}
              onChange={handleCheckboxChange}
            />
            Completed
          </label>
          <label>
            <input
              type="radio"
              value="inProgress"
              checked={selectedCheckbox === "inProgress"}
              onChange={handleCheckboxChange}
            />
            In Progress
          </label>
          <label>
            <input
              type="radio"
              value="notStarted"
              checked={selectedCheckbox === "notStarted"}
              onChange={handleCheckboxChange}
            />
            Not Started
          </label>
        </div>
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              <div>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  <span>{todo.task}</span>
                )}
              </div>
              <div>
                {editIndex === index ? (
                  <button onClick={updateTodo}>Save</button>
                ) : (
                  <>
                    <button onClick={() => startEditing(index)}>Edit</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                  </>
                )}
              </div>
              <label>
                <input
                  type="checkbox"
                  checked={todo.status === "Completed"}
                  onChange={() => toggleStatus(index, "Completed")}
                />
                Completed
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={todo.status === "In Progress"}
                  onChange={() => toggleStatus(index, "In Progress")}
                />
                In Progress
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={todo.status === "Not Started"}
                  onChange={() => toggleStatus(index, "Not Started")}
                />
                Not Started
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
