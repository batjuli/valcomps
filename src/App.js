import React from 'react';
import './App.css';

import Logo from './components/Logo';
import AgentIcon from './components/AgentIcon';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import GitHubIcon from '@material-ui/icons/GitHub';

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
// bet theres a better method for importing these

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
    marginTop: '30px',
  };
  const agentBox = {
    display: 'flex',
    gap: '45px',
    marginBottom: '15px',
  };
  const body = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const selectionContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };
  const selectionRow = {
    display: 'flex',
    gap: '15px',
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

  // removes an agent from selection
  const removeAgent = (agent) => {
    if (agent1 === agent) {
      setAgent1(valorantLogo);
    } else if (agent2 === agent) {
      setAgent2(valorantLogo);
    } else if (agent3 === agent) {
      setAgent3(valorantLogo);
    } else if (agent4 === agent) {
      setAgent4(valorantLogo);
    } else if (agent5 === agent) {
      setAgent5(valorantLogo);
    }
  };

  // adds agent only if there is space
  const addAgent = (agent) => {
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

  const clickAgent = (agent) => {
    if (alreadySelected(agent)) {
      // if agent is already selected, unselect it
      removeAgent(agent);
      // else try and add the agent
    } else {
      addAgent(agent);
    }
  };

  // agent arrays
  const duelists = [jett, phoenix, raze, reyna, yoru];
  const controllers = [astra, brimstone, omen, viper];
  const initiators = [breach, skye, sova];
  const sentinels = [cypher, killjoy, sage];

  const handleShare = () => {
    // dummy
    console.log('share');
  };

  const shareButton = {
    backgroundColor: '#FF4655',
    color: '#EBE7E0',
  };

  const buttonRow = {
    display: 'flex',
    gap: '15px',
  };

  const handleClear = () => {
    setAgent1(valorantLogo);
    setAgent2(valorantLogo);
    setAgent3(valorantLogo);
    setAgent4(valorantLogo);
    setAgent5(valorantLogo);
  };

  const toolbarStyle = {
    backgroundColor: '#FF4655',
  };

  const logo = {
    flexGrow: '1',
  };

  return (
    <div className='App'>
      <AppBar position='relative'>
        <Toolbar style={toolbarStyle}>
          <Typography variant='h5' color='inherit' noWrap style={logo}>
            VALCOMPS
          </Typography>
          <IconButton
            color='primary'
            aria-label='github repository'
            component='span'
            style={{ color: 'white' }}
            onClick={() =>
              window.open('https://github.com/batjuli/valcomps', '_blank')
            }
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={header}>
        <div style={agentBox}>
          <AgentIcon agent={agent1} onClick={() => setAgent1(valorantLogo)} />
          <AgentIcon agent={agent2} onClick={() => setAgent2(valorantLogo)} />
          <AgentIcon agent={agent3} onClick={() => setAgent3(valorantLogo)} />
          <AgentIcon agent={agent4} onClick={() => setAgent4(valorantLogo)} />
          <AgentIcon agent={agent5} onClick={() => setAgent5(valorantLogo)} />
        </div>
        <div style={buttonRow}>
          <Button variant='contained' onClick={handleClear}>
            Clear All
          </Button>
          <Button variant='contained' onClick={handleShare} style={shareButton}>
            Share Team
          </Button>
        </div>
        <Paper />
      </div>
      <div style={body}>
        <div style={selectionContainer}>
          <div style={selectionRow}>
            {duelists.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => clickAgent(agent)}
              />
            ))}
          </div>
          <div style={selectionRow}>
            {controllers.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => clickAgent(agent)}
              />
            ))}
          </div>
          <div style={selectionRow}>
            {initiators.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => clickAgent(agent)}
              />
            ))}
          </div>
          <div style={selectionRow}>
            {sentinels.map((agent) => (
              <AgentIcon
                size='small'
                agent={agent}
                onClick={() => clickAgent(agent)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
