import React from "react";

// TaskList component: Displays a task with a delete button
function TaskList({ task, onDelete }) {

  return (
    <div className="w-[500px] h-[100px] rounded-lg bg-white flex justify-center items-center gap-3">
      {/* Input field displaying the task text (read-only) */}
      <input
        readOnly // Prevents user from editing the task text
        className="w-72 h-12 px-3 py-2 bg-gray-200 rounded-md font-semibold text-black focus:outline-none"
        type="text"
        value={task.text} // Displays the task text
      />

      {/* Delete button to remove the task */}
      <button
        className="w-16 h-8 text-sm font-bold bg-red-500 hover:bg-red-600 cursor-pointer rounded-xl"
        onClick={onDelete} // Calls the onDelete function when clicked
      >
        Delete
      </button>
    </div>
  );
}

export default TaskList;