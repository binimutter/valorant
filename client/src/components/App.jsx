import React, { useState } from 'react';

import Header from './Header.jsx';
import AgentList from './AgentList.jsx';
import WeaponList from './WeaponList.jsx';
import Favorites from './Favorites.jsx';
import Maps from './Maps.jsx';

import './style/App.css';

function App() {
  const [updateAgent, setUpdateAgent] = useState(false);
  const [updateWeapon, setUpdateWeapon] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <div className="lists">
          <AgentList change={setUpdateAgent} />
          <WeaponList change={setUpdateWeapon} />
          <Favorites changeAgent={updateAgent} changeWeapon={updateWeapon} />
        </div>
        <Maps />
      </div>
    </div>
  );
}

export default App;