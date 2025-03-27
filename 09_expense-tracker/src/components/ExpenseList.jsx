// Import necessary dependencies
import React from "react";
import { useExpenseData } from "../contexts/ExpenseContext"; // Import custom hook to access global state
import Input from "./Input"; // Import reusable Input component
import Button from "./Button"; // Import reusable Button component

/**
 * ExpenseList Component
 * - Displays a list of expenses
 * - Allows users to remove an expense from the list
 */
function ExpenseList() {
  // Access the global state and dispatch function from ExpenseContext
  const { state, dispatch } = useExpenseData();

  // Extract expense data from the state
  const expenseData = state.expenses;

  /**
   * Handles removing an expense from the list
   * @param {number} id - The ID of the expense to be removed
   */
  function removeExpense(id) {
    dispatch({ type: "REMOVE_EXPENSE", payload: id }); // Dispatch action to remove expense
  }

  return (
    <div className="flex flex-col justify-center items-center gap-7">
      {/* Map through expenseData and render each expense */}
      {expenseData.map((expense) => (
        <div
          key={expense.id} // Unique key for each expense item
          className="w-[600px] h-30 bg-gray-500 rounded-xl flex justify-between items-center px-8 text-white"
        >
          {/* Display expense title */}
          <Input
            className="w-68 h-12"
            type="text"
            readOnly={true} // Makes the input non-editable
            value={expense.title} // Show title from state
          />

          {/* Display expense amount */}
          <Input
            className="w-36 h-12"
            type="text"
            readOnly={true} // Makes the input non-editable
            value={expense.amount} // Show amount from state
          />

          {/* Remove Expense Button */}
          <Button
            className={`w-20 h-8 rounded-md font-bold bg-red-500 border-3 border-transparent hover:bg-red-600 hover:border-red-300 transition-all duration-200`}
            type="submit"
            text="Remove"
            onClick={() => removeExpense(expense.id)} // Calls removeExpense function on click
          />
        </div>
      ))}
    </div>
  );
}

// Export the component for use in other parts of the app
export default ExpenseList;
