import React, { useState, useEffect } from "react";

const AddTransactionModal = ({
  isOpen,
  onClose,
  onSave,
  transactionToEdit,
}) => {
  const [amount, setAmount] = useState(transactionToEdit?.amount || "");
  const [category, setCategory] = useState(transactionToEdit?.category || "Food");
  const [description, setDescription] = useState(transactionToEdit?.description || "");
  const [type, setType] = useState(transactionToEdit?.type || "Debit");

  const handleSave = () => {
    const newTransaction = {
      id: transactionToEdit ? transactionToEdit.id : Date.now(),
      amount,
      category,
      description,
      type,
    };
    onSave(newTransaction);
  };

  useEffect(() => {
    if (transactionToEdit) {
      setAmount(transactionToEdit.amount);
      setCategory(transactionToEdit.category);
      setDescription(transactionToEdit.description);
      setType(transactionToEdit.type);
    }
  }, [transactionToEdit]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">{transactionToEdit ? "Edit" : "Add"} Transaction</h2>
        <div className="mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Amount"
          />
        </div>
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Billing">Billing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Description"
          />
        </div>
        <div className="flex mb-4">
          <button
            onClick={() => setType("Credit")}
            className={`mr-2 w-1/2 p-2 rounded-md ${type === "Credit" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Credit
          </button>
          <button
            onClick={() => setType("Debit")}
            className={`w-1/2 p-2 rounded-md ${type === "Debit" ? "bg-red-500 text-white" : "bg-gray-200"}`}
          >
            Debit
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 p-2 rounded-md">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded-md">
            {transactionToEdit ? "Update" : "Add"} Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
