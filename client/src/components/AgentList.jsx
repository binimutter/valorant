import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Agent from './Agent.jsx';
import './style/Agents.css';

const AgentList = ({change}) => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    let mounted = true;
    var options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://valorant-api.com/v1/agents',
    };
    axios.request(options)
      .then(function (response) {
        // console.log(response);
        if (mounted) {
          setAgents(response.data.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => mounted = false;
  }, []);

  return (
    <div className="agent-container">
      <h2 className="agentTitle">Agents:</h2>
      <div className="agent-list">
        { agents
          ? agents.map((agent) =>
            <Agent
              agent={agent}
              key={agent.uuid}
              change={change}
            />
          )
          : 'Loading..'}
      </div>
    </div>
  )
}

export default AgentList;

