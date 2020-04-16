import React from 'react';
import './App.css';
import Button from './components/Button';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
        <HoverCounter />
      </header>
    </div>
  );
}
export default App;
