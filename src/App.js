import React from 'react';
import Header from './components/Header';
import AccountContainer from "./components/AccountContainer";



function App() {
  return (
    <center>
       <div className="ui raised segment">
     <Header/>
      <AccountContainer />
    </div>
    </center>
   
  );
}

export default App;