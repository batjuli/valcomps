import React from 'react';
import './App.css';

import Logo from './components/Logo';
import AgentIcon from './components/AgentIcon';

import valorantLogo from './images/valorantLogo.png';
import jett from './images/jett.png';
import phoenix from './images/phoenix.png';
import raze from './images/raze.png';
import reyna from './images/reyna.png';
import yoru from './images/yoru.png';
import astra from './images/astra.png';
import brimstone from './images/brimstone.png';
import omen from './images/omen.png';
import viper from './images/viper.png';
import breach from './images/breach.png';
import skye from './images/skye.png';
import sova from './images/sova.png';
import cypher from './images/cypher.png';
import killjoy from './images/killjoy.png';
import sage from './images/sage.png';

const App = () => {
  const [agent1, setAgent1] = React.useState(valorantLogo);
  const [agent2, setAgent2] = React.useState(valorantLogo);
  const [agent3, setAgent3] = React.useState(valorantLogo);
  const [agent4, setAgent4] = React.useState(valorantLogo);
  const [agent5, setAgent5] = React.useState(valorantLogo);

  const header = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
  };
  const agentBox = {
    display: 'flex',
    gap: '45px',
  };
  const body = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const selectionContainer = {
    display: 'flex',
    flexDirection: 'column',
  };
  const selectionRow = {
    display: 'flex',
  };

  const alreadySelected = (agent) => {
    if (
      agent1 === agent ||
      agent2 === agent ||
      agent3 === agent ||
      agent4 === agent ||
      agent5 === agent
    ) {
      return true;
    }
    return false;
  };

  const selectAgent = (agent) => {
    if (alreadySelected(agent)) return;
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

  // agent arrays
  const duelists = [jett, phoenix, raze, reyna, yoru];
  const controllers = [astra, brimstone, omen, viper];
  const initiators = [breach, skye, sova];
  const sentinels = [cypher, killjoy, sage];

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
      <div style={body}>
        <div style={selectionContainer}>
          <div style={selectionRow}>
            {duelists.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => selectAgent(agent)}
              />
            ))}
          </div>
          <div style={selectionRow}>
            {controllers.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => selectAgent(agent)}
              />
            ))}
          </div>
          <div style={selectionRow}>
            {initiators.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => selectAgent(agent)}
              />
            ))}
          </div>
          <div style={selectionRow}>
            {sentinels.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => selectAgent(agent)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
