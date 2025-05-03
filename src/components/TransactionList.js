import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div className="my-6">
      {transactions.length === 0 ? (
        <p className="text-center text-[60px] text-gray-500">No transactions to display.</p>
      ) : (
        <>
          <div className="flex justify-between mb-2">
            <h2 className="font-semibold text-lg">Credit Transactions</h2>
          </div>
          {transactions
            .filter((t) => t.type === "Credit")
            .map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}

          <div className="flex justify-between mb-2 mt-6">
            <h2 className="font-semibold text-lg">Debit Transactions</h2>
          </div>
          {transactions
            .filter((t) => t.type === "Debit")
            .map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default TransactionList;
