import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

function App() {
  return (
    <div className="w-full flex justify-center gap-20 p-12">
      <div>
        <ExpenseForm />
      </div>
      <div className="flex flex-col items-center gap-16">
        <TotalExpense />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
