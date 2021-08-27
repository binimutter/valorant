import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style/Favorites.css';

const Favorites = ({ changeAgent, changeWeapon }) => {
  const [favoriteAgents, setFavoriteAgents] = useState(null);
  const [agentList, setAgentList] = useState(null);
  const [weaponList, setWeaponList] = useState(null);

  const getFavoritesAgent = async () => {
    try {
      const fetchAgents = await axios.get(`/fav/agent`);
      setAgentList(fetchAgents.data);
      // console.log(agentList);
    } catch (e) {
      console.log('error', e);
    }
  }

  const getFavoritesWeapon = async () => {
    try {
      const fetchWeapons = await axios.get(`/fav/weapon`);
      setWeaponList(fetchWeapons.data);
    } catch (e) {
      console.log('error', e);
    }
  }

  // useEffect(() => {
  //   getFavoritesAgent();
  // }, [])

  useEffect(() => {
    getFavoritesAgent();
  }, [changeAgent])

  useEffect(() => {
    getFavoritesWeapon();
  }, [changeWeapon])

  return (
    <div className="fav-container">
      <h2 className="fav-title">Favorites:</h2>
      <div className="fav-list">
        {agentList ?
          agentList.map((agent) => (
            <div className='fav-item' key={agent.id}>{agent.name}</div>
          ))
        : null}
        {weaponList ?
          weaponList.map((weapon) => (
            <div className='fav-item' key={weapon.id}>{weapon.name}</div>
          ))
        : null}
      </div>
    </div>
  )
}

export default Favorites;