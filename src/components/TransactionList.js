import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions}) {
  const transaction  = transactions.map((item)=>(
     <Transaction 
     key={item.id} 
    date={item.date} 
    description={item.description} 
    category={item.category} 
    amount={item.amount} />
  ))

  console.log(transaction)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transaction}
      </tbody>
    </table>
  );
}

export default TransactionsList;