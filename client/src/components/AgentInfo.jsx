import React, { useState } from 'react';

import './style/Agents.css';

const AgentInfo = ({ agent }) => {
  // var role = Object.values(agent.role);
  // console.log(agent.displayName);
  // console.log(role);
  return (
    <div className="agent-info">
        <p className="agent-desc">{agent.description}</p>
        {agent.role.displayName ?
          <p className="agent-role">Role: {agent.role.displayName}</p>
        : null}
    </div>
  )
}

export default AgentInfo;
