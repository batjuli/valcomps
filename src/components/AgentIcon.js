import React from 'react';

const AgentIcon = (props) => {
  const { size, agent, onClick, winWidth } = props;
  let diameter = '110px';
  let borderSize = '6px';
  let borderCol = '#FF4655';
  if (winWidth < 680) {
    diameter = '60px';
    borderSize = '4px';
  }
  if (size === 'small') {
    diameter = '80px';
    borderSize = '4px';
    borderCol = '#232C34';
    if (winWidth < 680) {
      diameter = '55px';
      borderSize = '2px';
    }
  }
  const style = {
    backgroundImage: 'url(' + agent + ')',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'contain',
    borderRadius: '50%',
    width: diameter,
    height: diameter,
    border: `${borderSize} solid ${borderCol}`,
    cursor: 'pointer',
  };
  return <button style={style} onClick={onClick}></button>;
};

export default AgentIcon;
