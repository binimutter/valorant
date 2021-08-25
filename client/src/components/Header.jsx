import React from 'react';
import { Image } from 'react-native';

const vIcon = require('./images/vIcon.png');

import './style/Header.css';

function Header() {
  return (
    <div className="header">
      {/* <Image className="icon" source={require('./images/vIcon.png')} /> */}
      <img src="https://studio.cults3d.com/4QqRV9kLYYEuw9ur_X3yjQl1sjk=/516x516/https://files.cults3d.com/uploaders/15024335/illustration-file/a86d53e4-2bd9-4a8f-9550-986686c3131a/gi0mAjIh_400x400.png" className="icon" />
      <h1 className="title">Valorant WIKI</h1>
    </div>
  );
}

export default Header;