import React, { useState } from 'react';
import axios from 'axios';

import Agent from './Agent.jsx';
import './style/Agents.css';

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  var options = {
    method: 'GET',
    url: 'https://valorant-api.com/v1/agents',
  };

  axios.request(options)
    .then(function (response) {
      setAgents(response.data.data);
      // console.log(agents);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="agent-container">
      <h2 className="agentTitle">Agents:</h2>
      <div className="agent-list">
        {
          agents.map((agent) =>
            <Agent
              agent={agent}
              key={agent.uuid}
            />
          )
        }
      </div>
    </div>
  )
}

export default AgentList;

