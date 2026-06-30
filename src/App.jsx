import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import "./App.css";

function App() {  
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [showFinished, setShowFinished] = useState(false);
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {
    const t = todos.find(i => i.id === id);
    setTodo(t.todo);      
    setEditId(id);        
  }

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this task?");
    if (isConfirmed) {
      let newTodos = todos.filter(item => item.id !== id);
      setTodos(newTodos);
    }
  }

  const handleAdd = () => {
    if (todo.trim() === "") return; 
    
    if (editId) {
      let newTodos = todos.map(item => 
        item.id === editId ? { ...item, todo: todo } : item
      );
      setTodos(newTodos);
      setEditId(null); 
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    setTodo(""); 
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    
    if (index !== -1) {
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
    }
  }

  return (
    <>
      <div className="min-h-screen w-full px-4 pb-12 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <Navbar />
        </div>

        <main className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-8 mt-2 shadow-[0_25px_60px_-15px_rgba(148,61,230,0.3)] border border-white/20 min-h-[75vh]">
          
          <div className="text-gray-800">
            <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
              Welcome to iTask
            </h1>
            <p className="text-gray-500 text-xs flex items-center justify-center">
              Your task planner is ready.
            </p>
          </div>

          <div className="text-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 w-full">
            <h1 className="text-2xl font-bold whitespace-nowrap">
              {editId ? "Update To-Do" : "Add a To-Do"}
            </h1>
          
            <div className="input-text flex items-center gap-3 w-full sm:w-auto max-w-md flex-1 sm:flex-initial justify-end">
              <input
                onChange={handleChange} 
                value={todo}
                className="bg-slate-100 rounded-xl px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                type="text"
                placeholder="Write a task..."
              />
              <button 
                onClick={handleAdd} 
                className="bg-purple-700 hover:bg-purple-800 p-2.5 text-white font-medium rounded-xl transition-all active:scale-95 flex items-center justify-center"
              >
                {editId ? <span className="px-2 text-sm">Save</span> : <Plus size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-8 border-b border-slate-100 pb-4">
            <input 
              type="checkbox" 
              id="showFinished"
              checked={showFinished} 
              onChange={() => setShowFinished(!showFinished)}
              className="cursor-pointer accent-purple-700 w-4 h-4"
            />
            <label htmlFor="showFinished" className="text-sm font-medium text-gray-600 cursor-pointer select-none">
              Show Finished Tasks
            </label>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mt-6">Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && (
              <div className="text-sm text-gray-400 mt-4 italic">
                No tasks left! Nice work.
              </div>
            )}
            
            {todos
              .filter(item => !showFinished || item.isCompleted)
              .map(item => {
                return (
                  <div key={item.id} className="todo flex space-x-4 items-center justify-between bg-slate-100 rounded-xl px-4 py-3 mt-4">
                    <div className="flex items-center gap-3 flex-1">
                      <input 
                        name={item.id} 
                        onChange={handleCheckbox} 
                        type="checkbox" 
                        checked={item.isCompleted}
                        className="cursor-pointer accent-purple-700 w-4 h-4"
                      />
                      <div className={item.isCompleted ? "line-through text-gray-400" : "text-gray-800 font-medium"}>
                        {item.todo}
                      </div>
                    </div>
                    
                    <div className="buttons flex items-center gap-2">
                      <button 
                        onClick={() => handleEdit(item.id)} 
                        className="bg-purple-100 text-purple-700 hover:bg-purple-700 hover:text-white p-2 rounded-xl transition-all active:scale-95 flex items-center justify-center"
                      >
                        <Pencil size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)} 
                        className="bg-red-100 text-red-600 hover:bg-red-500 hover:text-white p-2 rounded-xl transition-all active:scale-95 flex items-center justify-center"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )
              })}
          </div>

        </main>
      </div>
    </>
  );
}

export default App;