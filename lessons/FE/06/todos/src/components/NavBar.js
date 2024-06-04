import React from 'react';
import NavElement from './NavElement';

const style = {
  display: 'flex',
  alignItems: 'center',
};

function NavBar() {
  return(
    <div style={style}>
      <NavElement title='esimene' />
      <NavElement title='teine' />
      <NavElement title='kolmas' />
      <NavElement title='neljas' />
    </div>
  );
};

export default NavBar;
