import React, { useState } from 'react';
import axios from 'axios';

import AgentInfo from './AgentInfo.jsx';
import './style/Agents.css';

const Agent = ({ agent, change }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState(null);
  const [role, setRole] = useState(null);
  const [util, setUtil] = useState(null);
  const [fav, setFav] = useState(null);

  const showModal = (description, role, util, name) => {
    setShowDescription(true);
    setDescription(description);
    setRole(role);
    setUtil(util);
    setFav(name);
  };

  const hideModal = () => {
    setShowDescription(false);
    setDescription(null);
    setRole(null);
    setUtil(null);
    setFav(null);
  };

  const addToFavorite = async () => {
    if (fav) {
      try {
        const agent = {
          name: fav
        }
        await axios.post('/add/agent', agent);
        change(prevState => !prevState);
        console.log('success')
      } catch (e) {
        console.log('error');
      }
    }
  }

  return (
    <div className="agent-prof" key={agent.uuid}>
      <img className="agent-icon" src={agent.displayIcon} />
      <button className="agentName" onClick={() => {
        showModal(agent.description, agent.role, agent.abilities, agent.displayName)
      }}>{agent.displayName}</button>
      <AgentInfo show={showDescription} handleClose={hideModal} add={addToFavorite} agent={agent} description={description} role={role} util={util} fav={fav} />
    </div>
  )
}

export default Agent;

