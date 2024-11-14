import React from 'react';
import './App.css'; // Import the CSS file for global styles
import CurrencyConverter from './CurrencyConverter';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <CurrencyConverter />
    </div>
  );
}

export default App;