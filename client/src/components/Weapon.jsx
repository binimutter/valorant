import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import WeaponInfo from './WeaponInfo.jsx';
import './style/Weapons.css';

const Weapon = ({ weapon }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState(null);
  const [ms, setMs] = useState(null);
  const [equip, setEquip] = useState(null);
  const [reload, setReload] = useState(null);

  const showModal = (category, cost, ms, equip, reload) => {
    setShowDescription(true);
    setCategory(category);
    setCost(cost);
    setMs(ms);
    setEquip(equip);
    setReload(reload);
  }

  const hideModal = () => {
    setShowDescription(false);
    setCategory(null);
    setCost(null);
    setMs(null);
    setEquip(null);
    setReload(null);
  }

  return (
    <div className="weapon-prof" key={weapon.uuid}>
      <img className="weapon-icon" src={weapon.displayIcon} />
      <button className="weapon-name" onClick={() => {showModal(weapon.shopData.categoryText, weapon.shopData.cost, weapon.weaponStats.magazineSize, weapon.weaponStats.equipTimeSeconds, weapon.weaponStats.reloadTimeSeconds)}}>{weapon.displayName}</button>
      <WeaponInfo show={showDescription} handleClose={hideModal} weapon={weapon} category={category} cost={cost} ms={ms} equip={equip} reload={reload} />
    </div>
  )
}

export default Weapon;

