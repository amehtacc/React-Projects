// Import React library
import React from 'react';

// Import the custom hook to access the global expense state
import { useExpenseData } from "../contexts/ExpenseContext";

/**
 * TotalExpense Component
 * 
 * - Fetches the list of expenses from the global state (via Context API).
 * - Calculates the total amount spent by summing up all expenses.
 * - Displays the total expense in a styled box.
 */
function TotalExpense() {
    // Extract state from the ExpenseContext
    const { state } = useExpenseData();

    // Retrieve the list of expenses from state
    const expenseData = state.expenses;

    // Calculate total expense amount by summing all expense amounts
    const totalAmount = expenseData.reduce((acc, expense) => acc + expense.amount, 0);
   
    return (
        <div className="w-[600px] h-40 bg-gray-500 rounded-xl flex justify-center items-center gap-5 px-8 text-white">
            {/* Display the total expense heading */}
            <h3 className='text-2xl font-bold'>Total Expense:</h3>
            
            {/* Display the calculated total amount */}
            <p className='text-2xl font-semibold'>{totalAmount} Rs.</p>
        </div>
    );
}

// Export the component for use in other parts of the app
export default TotalExpense;
