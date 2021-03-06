import './App.css';
import React from 'react';
import Wrapper from './components/Wrapper';
import MyContext from './components/Context';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{
          name: 'Ann',
          age: 32
        }}>
        <Wrapper />
      </MyContext.Provider>
    </div>
  );
}

export default App;
