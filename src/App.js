import React from 'react';
import './App.css';

import Logo from './components/Logo';
import AgentIcon from './components/AgentIcon';

import jett from './images/jett.png';
import valorantLogo from './images/valorantLogo.png';

function App() {
  const [agent1, setAgent1] = React.useState(valorantLogo);
  const [agent2, setAgent2] = React.useState(valorantLogo);
  const [agent3, setAgent3] = React.useState(valorantLogo);
  const [agent4, setAgent4] = React.useState(valorantLogo);
  const [agent5, setAgent5] = React.useState(valorantLogo);

  const header = {
    display: 'flex',
    flexDirection: 'column',
  };
  const agentBox = {
    display: 'flex',
    gap: '45px',
  };
  const selectionContainer = {
    display: 'flex',
    flexDirection: 'column',
  };
  const selectionRow = {
    display: 'flex',
  };

  const selectAgent = (agent) => {
    setAgent1(jett);
  };

  return (
    <div className='App'>
      <div style={header}>
        <Logo />
        <div style={agentBox}>
          <AgentIcon agent={agent1} />
          <AgentIcon agent={agent2} />
          <AgentIcon agent={agent3} />
          <AgentIcon agent={agent4} />
          <AgentIcon agent={agent5} />
        </div>
      </div>
      <div style={selectionContainer}>
        <div style={selectionRow}>
          <AgentIcon
            size='small'
            agent={jett}
            onClick={() => selectAgent('jett')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
