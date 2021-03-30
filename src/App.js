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
    if (agent1 === valorantLogo) {
      setAgent1(agent);
    } else if (agent2 === valorantLogo) {
      setAgent2(agent);
    } else if (agent3 === valorantLogo) {
      setAgent3(agent);
    } else if (agent4 === valorantLogo) {
      setAgent4(agent);
    } else if (agent5 === valorantLogo) {
      setAgent5(agent);
    }
  };

  return (
    <div className='App'>
      <div style={header}>
        <Logo />
        <div style={agentBox}>
          <AgentIcon agent={agent1} onClick={() => setAgent1(valorantLogo)} />
          <AgentIcon agent={agent2} onClick={() => setAgent2(valorantLogo)} />
          <AgentIcon agent={agent3} onClick={() => setAgent3(valorantLogo)} />
          <AgentIcon agent={agent4} onClick={() => setAgent4(valorantLogo)} />
          <AgentIcon agent={agent5} onClick={() => setAgent5(valorantLogo)} />
        </div>
      </div>
      <div style={selectionContainer}>
        <div style={selectionRow}>
          <AgentIcon
            size='small'
            agent={jett}
            onClick={() => selectAgent(jett)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
