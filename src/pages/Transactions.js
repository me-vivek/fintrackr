import React, { useState } from "react";
import AddTransactionModal from "../components/AddTransactionModal";
import TransactionList from "../components/TransactionList";

const Transactions = ({
  transactions,
  onDelete,
  onEdit,
  onSave,
  isModalOpen,
  setIsModalOpen,
  transactionToEdit,
}) => {
  // State to store the selected filter category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory("All"); // Reset category filter
  };
  // Filter transactions based on the selected category
  const filteredTransactions = selectedCategory === "All"
    ? transactions
    : transactions.filter((transaction) => transaction.category === selectedCategory);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Manage Transactions</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add Transaction
        </button>
      </div>

      {/* Category Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="mr-2">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Billing">Billing</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Display filtered transactions */}
      <TransactionList
        transactions={filteredTransactions}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      {/* Add Transaction Modal */}
      {isModalOpen && (
        <AddTransactionModal
          isOpen={isModalOpen}
          onClose={closeModal} 
          onSave={onSave}
          transactionToEdit={transactionToEdit}
        />
      )}
    </div>
  );
};

export default Transactions;
