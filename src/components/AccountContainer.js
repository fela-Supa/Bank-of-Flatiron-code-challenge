import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionList";
import Search from "./searchForm";
import AddTransactionForm from "./AddTransitionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("https://json-server-vercel-lime.vercel.app/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;