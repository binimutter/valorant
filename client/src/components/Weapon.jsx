import React, { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import WeaponInfo from './WeaponInfo.jsx';
import './style/Weapons.css';

const Weapon = ({ weapon, change }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState(null);
  const [ms, setMs] = useState(null);
  const [equip, setEquip] = useState(null);
  const [reload, setReload] = useState(null);
  const [fav, setFav] = useState(null);

  const showModal = (category, cost, ms, equip, reload, name) => {
    setShowDescription(true);
    setCategory(category);
    setCost(cost);
    setMs(ms);
    setEquip(equip);
    setReload(reload);
    setFav(name);
  }

  const hideModal = () => {
    setShowDescription(false);
    setCategory(null);
    setCost(null);
    setMs(null);
    setEquip(null);
    setReload(null);
    setFav(null);
  }

  const addToFavorite = async () => {
    if (fav) {
      try {
        const weapon = {
          name: fav
        }
        await axios.post('/add/weapon', weapon);
        change(prevState => !prevState);
        console.log('success')
      } catch (e) {
        console.log('error', e);
      }
    }
  }

  return (
    <div className="weapon-prof" key={weapon.uuid}>
      <img className="weapon-icon" src={weapon.displayIcon} />
      <button className="weapon-name" onClick={() => {
        showModal(weapon.shopData.categoryText, weapon.shopData.cost, weapon.weaponStats.magazineSize, weapon.weaponStats.equipTimeSeconds, weapon.weaponStats.reloadTimeSeconds, weapon.displayName)
        }}>{weapon.displayName}</button>
      <WeaponInfo show={showDescription} handleClose={hideModal} add={addToFavorite} weapon={weapon} category={category} cost={cost} ms={ms} equip={equip} reload={reload} fav={fav} />
    </div>
  )
}

export default Weapon;

