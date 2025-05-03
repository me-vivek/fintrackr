import React from "react";

const TransactionItem = ({ transaction, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center border-b my-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
      <div>
        <p className="font-semibold">₹ {transaction.amount}</p>
        <p>{transaction.category}</p>
        <p className="text-sm text-gray-500">{transaction.description}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onEdit(transaction)}
          className="text-blue-500 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
