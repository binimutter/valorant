import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import WeaponInfo from './WeaponInfo.jsx';
import './style/Weapons.css';

const Weapon = ({ weapon }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="weapon-prof" key={weapon.uuid}>
      <img className="weapon-icon" src={weapon.displayIcon} />
      <button className="weapon-name" onClick={() => setShowDescription(!showDescription)}>{weapon.displayName}</button>
      {showDescription ?
        <WeaponInfo
          weapon={weapon}
        />
        : null}
    </div>
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={agent.displayIcon}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>{agent.displayName}</h3>
    //       {/* <p>{agent.role.displayName}</p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  )
}

export default Weapon;

