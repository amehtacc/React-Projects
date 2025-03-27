// Import necessary dependencies
import React from "react";
import Input from "./Input"; // Import the reusable Input component
import Button from "./Button"; // Import the reusable Button component
import { useExpenseData } from "../contexts/ExpenseContext"; // Import custom hook to access global state

/**
 * ExpenseForm Component
 * - Allows users to input expense details (title & amount)
 * - Uses the global state from ExpenseContext to manage expenses
 */
function ExpenseForm() {
  // Access state and dispatch function from ExpenseContext
  const { state, dispatch } = useExpenseData();

  /**
   * Handles form submission to add a new expense
   * @param {Event} e - The form submission event
   */
  function addExpense(e) {
    e.preventDefault(); // Prevent page reload on form submission

    // Ensure that both title and amount fields are filled before dispatching
    if (!state.title || !state.amount) return;

    // Dispatch action to add new expense with title and amount (converted to a number)
    dispatch({
      type: "ADD_EXPENSE",
      payload: { title: state.title, amount: parseFloat(state.amount) },
    });

    // Dispatch action to reset the form fields
    dispatch({ type: "RESET_FORM" });
  }

  return (
    <div className="w-[600px] h-[600px] text-white bg-gray-500 rounded-xl p-20 flex flex-col justify-center items-center gap-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Track your daily Expenses</h2>

      {/* Expense Form */}
      <form
        onSubmit={addExpense} // Handles form submission
        className="h-[50%] flex flex-col justify-between items-center"
      >
        {/* Expense Title Input */}
        <Input
          className="w-96 h-12 border-3 border-transparent hover:border-gray-700 transition-all duration-300"
          id="title"
          type="text"
          placeholder="Enter expense title or name"
          value={state.title} // Controlled input bound to state
          onChange={(e) =>
            dispatch({ type: "UPDATE_TITLE", payload: e.target.value }) // Updates title in state
          }
        />

        {/* Expense Amount Input */}
        <Input
          className="w-96 h-12 border-3 border-transparent hover:border-gray-700 transition-all duration-300"
          id="amount"
          type="text"
          placeholder="Enter amount"
          value={state.amount} // Controlled input bound to state
          onChange={(e) =>
            dispatch({ type: "UPDATE_AMOUNT", payload: e.target.value }) // Updates amount in state
          }
        />

        {/* Submit Button */}
        <Button
          className="w-36 h-12 rounded-lg font-bold text-lg bg-green-500 border-3 border-transparent hover:bg-green-600 hover:border-green-300 transition-all duration-200"
          type="submit"
          text="Add Expense"
        />
      </form>
    </div>
  );
}

// Export the component for use in other parts of the app
export default ExpenseForm;
