import React from "react";
import { useState } from "react";
import TaskList from "./TaskList"; // Importing the TaskList component

function Input() {
  // State to store the user input and the list of tasks
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  function handleAddTask() {
    // Prevent adding empty tasks
    if (!input.trim()) return;

    // Check if the task already exists using .some()
    // .some() returns true if at least one task matches the condition
    if (tasks.some((task) => task.text === input.trim())) {
      alert("Task already exists!");
      return;
    }

    // Add new task to the list with a unique ID
    setTasks((prev) => [...prev, { id: Date.now(), text: input }]);

    // Clear the input field after adding a task
    setInput("");
  }

  // Function to delete a task based on its ID
  function handleDeleteTask(id) {
    // .filter() creates a new array with all tasks except the one that matches the given id
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <>
      {/* Input field and add button */}
      <div className="flex justify-center items-center">
        <input
          className="w-96 h-12 px-3 py-2 bg-amber-300 rounded-l-lg font-semibold text-black focus:outline-none"
          type="text"
          placeholder="Write your task here..."
          onChange={(e) => setInput(e.target.value)} // Update input state
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()} // Add task when Enter is pressed
          value={input}
        />
        <button
          className="w-20 h-12 bg-green-500 rounded-r-lg cursor-pointer hover:bg-green-600 font-bold"
          onClick={handleAddTask} // Add task when button is clicked
        >
          Add
        </button>
      </div>

      {/* Render the list of tasks */}
      <div className="flex flex-col gap-5">
        {tasks.map((task) => (
          <TaskList 
            task={task} 
            key={task.id} 
            onDelete={() => handleDeleteTask(task.id)} // Pass delete function to TaskList
          />
        ))}
      </div>
    </>
  );
}

export default Input;
