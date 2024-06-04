import React from 'react';

const style = {
    border: '1px solid black',
    margin: '5px',
    flex: 1,
    textAlign: 'center',
}

function NavElement(props) {
  return(
    <p style={style}>{props.title}</p>
  );
};

export default NavElement;