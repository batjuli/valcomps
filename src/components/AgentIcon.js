import React from 'react';
import valorantLogo from '../images/valorantLogo.png';

const AgentIcon = (props) => {
  const { size, agent } = props;
  let diameter = '125px';
  let borderSize = '6px';
  let borderCol = '#FF4655';
  if (size === 'small') {
    diameter = '80px';
    borderSize = '3px';
    borderCol = '#232C34';
  }
  const style = {
    backgroundImage: 'url(' + agent + ')',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'contain',
    borderRadius: '50%',
    width: diameter,
    height: diameter,
    border: `${borderSize} solid ${borderCol}`,
  };
  return <div style={style}></div>;
};

export default AgentIcon;
