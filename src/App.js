import React from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {borderWidth: "400px", background: "green" };

function App() {
  return (
    <div className="App">
      <div styles = {{styles}}>
        <button>New Quote</button>
      </div>
    </div>
  );
}

export default App;
