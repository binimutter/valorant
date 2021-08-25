import React, { useState } from 'react';
import axios from 'axios';

import Weapon from './Weapon.jsx';
import './style/Weapons.css';

const WeaponList = () => {
  const [weapons, setWeapons] = useState([]);

  var options = {
    method: 'GET',
    url: 'https://valorant-api.com/v1/weapons',
  };

  axios.request(options)
    .then(function (response) {
      setWeapons(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="weapon-container">
      <h2 className="weapon-title">Weapons:</h2>
      <div className="weapon-list">
        {
          weapons.map((weapon) =>
            <Weapon
              weapon={weapon}
              key={weapon.uuid}
            />
          )
        }
      </div>
    </div>
  )
}

export default WeaponList;

