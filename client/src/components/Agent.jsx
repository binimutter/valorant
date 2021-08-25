import React, { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import AgentInfo from './AgentInfo.jsx';
import './style/Agents.css';

const Agent = ({ agent }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState(null);
  const [role, setRole] = useState(null);
  const [util, setUtil] = useState(null);

  const showModal = (description, role, util) => {
    setShowDescription(true);
    setDescription(description);
    setRole(role);
    setUtil(util);
  }

  const hideModal = () => {
    setShowDescription(false);
    setDescription(null);
    setRole(null);
    setUtil(null);
  }

  return (
    <div className="agent-prof" key={agent.uuid}>
      <img className="agent-icon" src={agent.displayIcon} />
      <button className="agentName" onClick={() => {showModal(agent.description, agent.role, agent.abilities)}}>{agent.displayName}</button>
      <AgentInfo show={showDescription} handleClose={hideModal} agent={agent} description={description} role={role} util={util} />
    </div>
  )
}

export default Agent;

