import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'

import './style/Agents.css';

const AgentInfo = ({ show, handleClose, add, agent, description, role, util, fav }) => {
  const toggleModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={toggleModal}>
      <div className="agent-modal-container">
        <div className="agent-btn-container">
          <button className="modal-close-btn" type="button" onClick={handleClose} aria-label="modal close button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="modal-add-btn" type="button" onClick={() => {
            add(fav)
          }} aria-label="modal add button">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        {description ?
          <p className="agent-desc">{description}</p>
          : null}
        {role ?
          <div className="agent-role">
            <p className="agent-desc">Role:{' '}{role.displayName}</p>
            <p className="agent-desc">{role.description}</p>
          </div>
          : null}
        {util ?
          <div className="agent-util">
            <p className="agent-desc">Abilities:{' '}{util[0].displayName}{',  '}{util[1].displayName}{',  '}{util[2].displayName}{',  '}Ultimate{' '}-{' '}{util[3].displayName}</p>
          </div>
          : null}
      </div>
    </div>
  )
}

export default AgentInfo;
