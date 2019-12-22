import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import StoreSignUp from './components/StoreSignUp';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          {/* <StoreSignUp /> */}
          <Home />
        </div>
      </div>
    )
  }
}

export default App;
