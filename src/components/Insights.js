import React from "react";

const Insights = ({ transactions }) => {
  const totalCredits = transactions
    .filter((t) => t.type === "Credit")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalDebits = transactions
    .filter((t) => t.type === "Debit")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const netBalance = totalCredits - totalDebits;

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="font-semibold text-lg">Insights</h2>
      <p className="mt-2">Total Credits: ₹ {totalCredits}</p>
      <p className="mt-2">Total Debits: ₹ {totalDebits}</p>
      <br/> <hr/>
      <p className="mt-2 font-bold">Net Balance: {netBalance > 0 ? <span className="text-green-500">₹ {netBalance}</span>: netBalance < 0 ? <span className="text-red-500">₹ {netBalance}</span>:<span>₹ {netBalance}</span>}</p>
    </div>
  );
};

export default Insights;
