import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './style/Maps.css';

const MapModal = ({ show, handleClose, img }) => {
  const toggleModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={toggleModal}>
      <div>
      <button className="modal-close-btn" type="button" onClick={handleClose} aria-label="modal close button">
        <FontAwesomeIcon icon={faTimes} />
      </button>
        <section className="map-modal-container">
          <img className="map-modal" src={img} alt="img"/>
        </section>
      </div>
    </div>
  )
}

export default MapModal;