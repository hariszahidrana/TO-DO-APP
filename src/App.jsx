import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
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
              Add a To-Do
            </h1>
          
            <div className="input-text flex items-center gap-3 w-full sm:w-auto max-w-md flex-1 sm:flex-initial justify-end">
              <input
                className="bg-slate-100 rounded-xl px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                type="text"
                placeholder="Write a task..."
              />
              <button className="bg-purple-700 hover:bg-purple-800 px-6 py-2 text-white font-medium rounded-xl transition-all active:scale-95 whitespace-nowrap">
                Add
              </button>
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mt-10">Your Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                facilis?
              </div>
              <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
