import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style/Agents.css';

const AgentInfo = ({ show, handleClose, agent, description, role, util }) => {
  const toggleModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={toggleModal}>
      <div className="agent-modal-container">
        <button className="modal-close-btn" type="button" onClick={handleClose} aria-label="modal close button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
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
