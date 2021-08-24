import React from 'react';
import { Image } from 'react-native';

const vIcon = require('./images/vIcon.png');

import './style/Header.css';

function Header() {
  return (
    <div className="header">
      <Image className="icon" source={require('../images/vIcon.png')} />
      {/* <img src={vIcon} className="icon" /> */}
      <h1 className="title">Valorant Weapons</h1>
    </div>
  );
}

export default Header;