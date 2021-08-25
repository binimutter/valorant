import React, { useState } from 'react';

import './style/Weapons.css';

const WeaponInfo = ({ weapon }) => {
  // var role = Object.values(agent.role);
  // console.log(agent.displayName);
  // console.log(role);
  return (
    <div className="weapon-info">
        <p className="weapon-stats">Category:{' '}{weapon.shopData.category}</p>
        <p className="weapon-stats">Cost:{' '}{weapon.shopData.cost}</p>
        <p className="weapon-stats">Magazine Size:{' '}{weapon.weaponStats.magazineSize}</p>
        <p className="weapon-stats">Equip Time{' (in secs)'}:{' '}{weapon.weaponStats.equipTimeSeconds}</p>
        <p className="weapon-stats">Reload Time{' (in secs)'}:{' '}{weapon.weaponStats.reloadTimeSeconds}</p>
        {/* {agent.role.displayName ?
          <p className="weapon-role">Role: {weapon.role.displayName}</p>
        : null} */}
    </div>
  )
}

export default WeaponInfo;
