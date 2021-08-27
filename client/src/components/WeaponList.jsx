import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Weapon from './Weapon.jsx';
import './style/Weapons.css';

const WeaponList = ({change}) => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    let mounted = true;
    var options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://valorant-api.com/v1/weapons',
    };
    axios.request(options)
      .then(function (response) {
        // console.log(response);
        if (mounted) {
          setWeapons(response.data.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => mounted = false;
  }, []);

  return (
    <div className="weapon-container">
      <h2 className="weapon-title">Weapons:</h2>
      <div className="weapon-list">
        { weapons
          ? weapons.map((weapon) =>
            <Weapon
              weapon={weapon}
              key={weapon.uuid}
              change={change}
            />
          )
          : 'Loading..'}
      </div>
    </div>
  )
}

export default WeaponList;

