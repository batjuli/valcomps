import React from 'react';

import Logo from './Logo';
import AgentIcon from './AgentIcon';

const Header = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
  };
  const agentBox = {
    display: 'flex',
    gap: '45px',
  };
  return (
    <div style={style}>
      <Logo />
      <div style={agentBox}>
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
      </div>
    </div>
  );
};

export default Header;
