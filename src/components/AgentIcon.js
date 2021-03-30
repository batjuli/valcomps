import React from 'react';

const AgentIcon = (props) => {
  const { size, agent, onClick } = props;
  let diameter = '125px';
  let borderSize = '6px';
  let borderCol = '#FF4655';
  if (size === 'small') {
    diameter = '80px';
    borderSize = '4px';
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
  return <button style={style} onClick={onClick}></button>;
};

export default AgentIcon;
