import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style/Weapons.css';

const WeaponInfo = ({ show, handleClose, weapon, category, cost, ms, equip, reload }) => {
  const toggleModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={toggleModal}>
      <div className="modal-container">
      <button className="modal-close-btn" type="button" onClick={handleClose} aria-label="modal close button">
        <FontAwesomeIcon icon={faTimes} />
      </button>
        {category ?
          <p className="weapon-stats">Category:{' '}{category}</p>
          : null}
        {cost ?
          <p className="weapon-stats">Cost:{' '}{cost}</p>
          : null}
        {ms ?
          <p className="weapon-stats">Magazine Size:{' '}{ms}</p>
          : null}
        {equip ?
          <p className="weapon-stats">Equip Time{' (in secs)'}:{' '}{equip}</p>
          : null}
        {reload ?
          <p className="weapon-stats">Reload Time{' (in secs)'}:{' '}{reload}</p>
          : null}
      </div>
      {/* <p className="weapon-stats">Category:{' '}{weapon.shopData.category}</p> */}
      {/* <p className="weapon-stats">Cost:{' '}{weapon.shopData.cost}</p>
      <p className="weapon-stats">Magazine Size:{' '}{weapon.weaponStats.magazineSize}</p>
      <p className="weapon-stats">Equip Time{' (in secs)'}:{' '}{weapon.weaponStats.equipTimeSeconds}</p>
      <p className="weapon-stats">Reload Time{' (in secs)'}:{' '}{weapon.weaponStats.reloadTimeSeconds}</p> */}
    </div>
  )
}

export default WeaponInfo;
