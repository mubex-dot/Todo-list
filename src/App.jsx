// // import React from "react";
// // import Sidebar from "./components/Sidebar";
// // import Editor from "./components/Editor";
// // // eslint-disable-next-line no-unused-vars
// // import data from "./data";
// // import { nanoid } from "nanoid";

// // export default function App() {
// //   const [notes, setNotes] = React.useState(
// //     () => JSON.parse(localStorage.getItem("notes")) || []
// //   );
// //   const [currentNoteId, setCurrentNoteId] = React.useState(
// //     (notes[0] && notes[0].id) || ""
// //   );

// //   React.useEffect(() => {
// //     localStorage.setItem("notes", JSON.stringify(notes));
// //   }, [notes]);

// //   function createNewNote() {
// //     const newNote = {
// //       id: nanoid(),
// //       body: "# Type your markdown note's title here",
// //     };
// //     setNotes((prevNotes) => [newNote, ...prevNotes]);
// //     setCurrentNoteId(newNote.id);
// //   }

// //   function updateNote(text) {
// //     // Put the most recently-modified note at the top
// //     setNotes((oldNotes) => {
// //       const newArray = [];
// //       for (let i = 0; i < oldNotes.length; i++) {
// //         const oldNote = oldNotes[i];
// //         if (oldNote.id === currentNoteId) {
// //           newArray.unshift({ ...oldNote, body: text });
// //         } else {
// //           newArray.push(oldNote);
// //         }
// //       }
// //       return newArray;
// //     });
// //   }

// //   function deleteNote(event, noteId) {
// //     event.stopPropagation();
// //     setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
// //   }

// //   function findCurrentNote() {
// //     return (
// //       notes.find((note) => {
// //         return note.id === currentNoteId;
// //       }) || notes[0]
// //     );
// //   }

// //   return (
// //     <main>
// //       {notes.length > 0 ? (
// //         <>
// //           <Sidebar
// //             notes={notes}
// //             currentNote={findCurrentNote()}
// //             setCurrentNoteId={setCurrentNoteId}
// //             newNote={createNewNote}
// //             deleteNote={deleteNote}
// //           />
// //           {currentNoteId && notes.length > 0 && (
// //             <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
// //           )}
// //         </>
// //       ) : (
// //         <div className="no-notes">
// //           <h1>You have no notes</h1>
// //           <button className="first-note" onClick={createNewNote}>
// //             Create one now
// //           </button>
// //         </div>
// //       )}
// //     </main>
// //   );
// // }

// // import { useState, useEffect } from "react";

// // export default function TodoList() {
// //   const [todos, setTodos] = useState([]);
// //   const [inputValue, setInputValue] = useState("");

// //   useEffect(() => {
// //     const savedTodos = localStorage.getItem("todos");
// //     if (savedTodos) {
// //       setTodos(JSON.parse(savedTodos));
// //     }
// //   }, []);

// //   const addTodo = () => {
// //     if (inputValue.trim() !== "") {
// //       const newTodos = [...todos, inputValue];
// //       setTodos(newTodos);
// //       localStorage.setItem("todos", JSON.stringify(newTodos));
// //       setInputValue("");
// //     }
// //   };

// //   const deleteTodo = (index) => {
// //     const newTodos = [...todos];
// //     newTodos.splice(index, 1);
// //     setTodos(newTodos);
// //     localStorage.setItem("todos", JSON.stringify(newTodos));
// //   };

// //   return (
// //     <div>
// //       <h1>Todo List</h1>
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={(e) => setInputValue(e.target.value)}
// //         placeholder="Enter a task"
// //       />
// //       <button onClick={addTodo}>Add</button>
// //       <ul>
// //         {todos.map((todo, index) => (
// //           <li key={index}>
// //             {todo}
// //             <button onClick={() => deleteTodo(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";

// export default function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     const savedTodos = localStorage.getItem("todos");
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);

//   const addTodo = () => {
//     if (inputValue.trim() !== "") {
//       const newTodo = { task: inputValue, status: false };
//       const newTodos = [...todos, newTodo];
//       setTodos(newTodos);
//       localStorage.setItem("todos", JSON.stringify(newTodos));
//       setInputValue("");
//     }
//   };

//   const deleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     localStorage.setItem("todos", JSON.stringify(newTodos));
//   };

//   const toggleStatus = (index) => {
//     const newTodos = [...todos];
//     const todo = newTodos[index];
//     if (todo.status === "Not Started") {
//       todo.status = "In Progress";
//     } else if (todo.status === "In Progress") {
//       todo.status = "Completed";
//     } else {
//       todo.status = "Not Started";
//     }
//     setTodos(newTodos);
//     localStorage.setItem("todos", JSON.stringify(newTodos));
//   };

//   return (
//     <div className="todo">
//       <h1>Todo List</h1>
//       <div className="inputbar">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a task"
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <div className="todo-list">
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               {todo.task}
//               <button onClick={() => deleteTodo(index)}>Delete</button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.status === "Completed"}
//                   onChange={() => toggleStatus(index)}
//                 />
//                 Completed
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.status === "In Progress"}
//                   onChange={() => toggleStatus(index)}
//                 />
//                 In Progress
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.status === "Not Started"}
//                   onChange={() => toggleStatus(index)}
//                 />
//                 Not Started
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";

// export default function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editIndex, setEditIndex] = useState(-1);
//   const [editValue, setEditValue] = useState("");

//   useEffect(() => {
//     const savedTodos = localStorage.getItem("todos");
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);

//   const addTodo = () => {
//     if (inputValue.trim() !== "") {
//       const newTodo = { task: inputValue, status: "Not Started" };
//       const newTodos = [...todos, newTodo];
//       setTodos(newTodos);
//       localStorage.setItem("todos", JSON.stringify(newTodos));
//       setInputValue("");
//     }
//   };

//   const deleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     localStorage.setItem("todos", JSON.stringify(newTodos));
//   };

//   const toggleStatus = (index) => {
//     const newTodos = [...todos];
//     const todo = newTodos[index];
//     if (todo.status === "Not Started") {
//       todo.status = "In Progress";
//     } else if (todo.status === "In Progress") {
//       todo.status = "Completed";
//     } else {
//       todo.status = "Not Started";
//     }
//     setTodos(newTodos);
//     localStorage.setItem("todos", JSON.stringify(newTodos));
//   };

//   const startEditing = (index) => {
//     setEditIndex(index);
//     setEditValue(todos[index].task);
//   };

//   const updateTodo = () => {
//     if (editValue.trim() !== "") {
//       const newTodos = [...todos];
//       newTodos[editIndex].task = editValue;
//       setTodos(newTodos);
//       localStorage.setItem("todos", JSON.stringify(newTodos));
//       setEditIndex(-1);
//       setEditValue("");
//     }
//   };

//   // Sort the todos array based on status (In Progress -> Not Started -> Completed)
//   const sortedTodos = todos.sort((a, b) => {
//     if (a.status === "In Progress") return -1;
//     if (a.status === "Completed") return 1;
//     return 0;
//   });

//   return (
//     <div className="todo">
//       <h1>Todo List</h1>
//       <div className="inputbar">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a task"
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <div className="todo-list">
//         <ul>
//           {sortedTodos.map((todo, index) => (
//             <li key={index}>
//               <div>
//                 {editIndex === index ? (
//                   <input
//                     type="text"
//                     value={editValue}
//                     onChange={(e) => setEditValue(e.target.value)}
//                   />
//                 ) : (
//                   <span>{todo.task}</span>
//                 )}
//               </div>
//               <div>
//                 {editIndex === index ? (
//                   <button onClick={updateTodo}>Save</button>
//                 ) : (
//                   <>
//                     <button onClick={() => startEditing(index)}>Edit</button>
//                     <button onClick={() => deleteTodo(index)}>Delete</button>
//                   </>
//                 )}
//               </div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.status === "Completed"}
//                   onChange={() => toggleStatus(index)}
//                 />
//                 Completed
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.status === "In Progress"}
//                   onChange={() => toggleStatus(index)}
//                 />
//                 In Progress
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.status === "Not Started"}
//                   onChange={() => toggleStatus(index)}
//                 />
//                 Not Started
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
