import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import NotFound from "./pages/NotFound";


function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const editTransaction = (transaction) => {
    setTransactionToEdit(transaction);
    setIsModalOpen(true);
  };

  const saveTransaction = (transaction) => {
    if (transactionToEdit) {
      setTransactions(
        transactions.map((t) => (t.id === transaction.id ? transaction : t))
      );
    } else {
      addTransaction(transaction);
    }
    setIsModalOpen(false);
    setTransactionToEdit(null);
  };

  return (
    <Router>
       <div>
         <nav className="flex justify-between items-center p-4 md:px-20 gap-4 bg-blue-100">
          <Link to="/" className="text-2xl font-bold text-center">FinTrackr</Link>
          <span className="flex justify-center items-center gap-4">
            <Link to="/" className="text-blue-500">Home</Link>
            <Link to="/transactions" className="text-blue-500">Transactions</Link>
          </span>
         </nav>
       </div>
       <div className="container mx-auto p-4 md:px-20">
         <Routes>
           <Route exact path="/" element={<Home transactions={transactions} />} />
           <Route path="/transactions" element={
             <Transactions
               transactions={transactions}
               onDelete={deleteTransaction}
               onEdit={editTransaction}
               onSave={saveTransaction}
               isModalOpen={isModalOpen}
               setIsModalOpen={setIsModalOpen}
               transactionToEdit={transactionToEdit} /> 
              } 
            />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </div>
     </Router>
  );
}

export default App;
