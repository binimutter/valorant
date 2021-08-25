import React from 'react';

import Header from './Header.jsx';
import AgentList from './AgentList.jsx';
import WeaponList from './WeaponList.jsx';
import Maps from './Maps.jsx';

import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <div className="lists">
          <AgentList />
          <WeaponList />
        </div>
        <Maps />
      </div>
    </div>
  );
}

export default App;