// Import necessary hooks and functions from React
import React, { createContext, useContext, useReducer } from 'react';

// Creating a context for managing expense-related data across the application.
const ExpenseContext = createContext();

/**
 * Reducer function to handle state updates based on dispatched actions.
 * It receives the current state and an action, then returns a new state based on the action type.
 * 
 * @param {Object} state - The current state of the application.
 * @param {Object} action - An object containing the action type and payload (data required for state changes).
 * @returns {Object} - The updated state based on the action type.
 */
function expenseReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TITLE":
      // Updates the `title` property in the state with the new value from action.payload
      return { ...state, title: action.payload };

    case "UPDATE_AMOUNT":
      // Updates the `amount` property in the state with the new value from action.payload
      return { ...state, amount: action.payload };

    case "ADD_EXPENSE":
      // Adds a new expense to the `expenses` array while preserving existing expenses.
      // Each new expense gets a unique `id` using Date.now().
      return { 
        ...state, 
        expenses: [...state.expenses, { id: Date.now(), ...action.payload }]
      };

    case "REMOVE_EXPENSE":
      // Filters out the expense that matches the given id from action.payload.
      // This removes the specified expense from the `expenses` array.
      return { 
        ...state, 
        expenses: state.expenses.filter((expense) => expense.id !== action.payload) 
      };

    case "RESET_FORM":
      // Reset the form fields (title & amount) back to an empty string.
      return { ...state, title: "", amount: "" };

    default:
      // Default case: If action type doesn't match, return the current state without modification.
      return state;
  }
}

/**
 * ExpenseProvider component that wraps around parts of the application where expense state is needed.
 * It provides the state and dispatch function using Context API.
 *
 * @param {Object} children - The child components that will have access to the expense state.
 * @returns {JSX.Element} - The context provider that shares the state and dispatch function.
 */
export function ExpenseProvider({ children }) {
  // useReducer hook initializes state and provides a dispatch function to modify it
  const [state, dispatch] = useReducer(expenseReducer, {
    title: "",      // Stores the current title of an expense
    amount: "",     // Stores the current amount of an expense
    expenses: []    // Stores the list of all added expenses
  });

  return (
    // Context Provider that makes `state` and `dispatch` available to all child components
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

/**
 * Custom hook that allows components to access the expense state and dispatch function.
 * This avoids the need for manually using `useContext(ExpenseContext)` in every component.
 *
 * @returns {Object} - The state and dispatch function from ExpenseContext.
 */
export function useExpenseData() {
  return useContext(ExpenseContext);
}
