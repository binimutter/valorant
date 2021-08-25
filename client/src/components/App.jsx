import React from 'react';

import Header from './Header.jsx';
import AgentList from './AgentList.jsx';

import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="appBody">
        <AgentList />
      </main>
    </div>
  );
}

export default App;