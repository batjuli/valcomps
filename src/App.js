import React from 'react';
import './App.css';

import AgentIcon from './components/AgentIcon';
import ShareDialog from './components/ShareDialog';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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
  // agent selection states
  const [agent1, setAgent1] = React.useState(valorantLogo);
  const [agent2, setAgent2] = React.useState(valorantLogo);
  const [agent3, setAgent3] = React.useState(valorantLogo);
  const [agent4, setAgent4] = React.useState(valorantLogo);
  const [agent5, setAgent5] = React.useState(valorantLogo);

  // note for future: maybe just have one state that's an array?
  // then can map this array to the agent icons, but since there's only 5 this is fine for now
  // then could have also just counted num duelists etc from this array ;(

  // role count states
  const [numDuelists, setNumDuelists] = React.useState(0);
  const [numControllers, setNumControllers] = React.useState(0);
  const [numInitiators, setNumInitiators] = React.useState(0);
  const [numSentinels, setNumSentinels] = React.useState(0);

  // state for share team dialog
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);

  const handleShareOpen = () => {
    setShareDialogOpen(true);
  };

  const handleShareClose = () => {
    setShareDialogOpen(false);
  };

  // agent arrays
  const duelists = [jett, phoenix, raze, reyna, yoru];
  const controllers = [astra, brimstone, omen, viper];
  const initiators = [breach, skye, sova];
  const sentinels = [cypher, killjoy, sage];

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
    // remove the agent
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
    // subtract from agent count
    if (duelists.includes(agent)) {
      setNumDuelists(numDuelists - 1);
    } else if (controllers.includes(agent)) {
      setNumControllers(numControllers - 1);
    } else if (initiators.includes(agent)) {
      setNumInitiators(numInitiators - 1);
    } else if (sentinels.includes(agent)) {
      setNumSentinels(numSentinels - 1);
    }
  };

  // adds to agent count depending on role
  const incrementRole = (agent) => {
    if (duelists.includes(agent)) {
      setNumDuelists(numDuelists + 1);
    } else if (controllers.includes(agent)) {
      setNumControllers(numControllers + 1);
    } else if (initiators.includes(agent)) {
      setNumInitiators(numInitiators + 1);
    } else if (sentinels.includes(agent)) {
      setNumSentinels(numSentinels + 1);
    }
  };

  // adds agent only if there is space
  const addAgent = (agent) => {
    if (agent1 === valorantLogo) {
      setAgent1(agent);
      incrementRole(agent);
    } else if (agent2 === valorantLogo) {
      setAgent2(agent);
      incrementRole(agent);
    } else if (agent3 === valorantLogo) {
      setAgent3(agent);
      incrementRole(agent);
    } else if (agent4 === valorantLogo) {
      setAgent4(agent);
      incrementRole(agent);
    } else if (agent5 === valorantLogo) {
      setAgent5(agent);
      incrementRole(agent);
    }
  };

  const clickAgent = (agent) => {
    // if clicking valorant logo, do nothing
    if (agent === valorantLogo) return;
    if (alreadySelected(agent)) {
      // if agent is already selected, unselect it
      removeAgent(agent);
      // else try and add the agent
    } else {
      addAgent(agent);
    }
  };

  const handleClear = () => {
    setAgent1(valorantLogo);
    setAgent2(valorantLogo);
    setAgent3(valorantLogo);
    setAgent4(valorantLogo);
    setAgent5(valorantLogo);
    setNumDuelists(0);
    setNumInitiators(0);
    setNumControllers(0);
    setNumSentinels(0);
  };

  const header = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    marginTop: '30px',
  };
  const agentBox = {
    display: 'flex',
    width: '90vw',
    maxWidth: '800px',
    minWidth: '350px',
    justifyContent: 'space-around',
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

  const toolbarStyle = {
    backgroundColor: '#FF4655',
  };

  const logo = {
    flexGrow: '1',
  };

  const shareButton = {
    backgroundColor: '#FF4655',
    color: '#EBE7E0',
  };

  const roleCountRow = {
    display: 'flex',
    width: '90vw',
    maxWidth: '600px',
    minWidth: '350px',
    justifyContent: 'space-around',
    marginBottom: '15px',
  };

  const buttonRow = {
    display: 'flex',
    gap: '15px',
  };

  // state for window width for adapatiblity and responsiveness
  const [winWidth, setWinWidth] = React.useState(0);
  React.useEffect(() => {
    const updateWidth = () => {
      setWinWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
      <Container component='main' maxWidth='lg'>
        <div style={header}>
          <div style={agentBox}>
            <AgentIcon
              agent={agent1}
              onClick={() => clickAgent(agent1)}
              winWidth={winWidth}
            />
            <AgentIcon
              agent={agent2}
              onClick={() => clickAgent(agent2)}
              winWidth={winWidth}
            />
            <AgentIcon
              agent={agent3}
              onClick={() => clickAgent(agent3)}
              winWidth={winWidth}
            />
            <AgentIcon
              agent={agent4}
              onClick={() => clickAgent(agent4)}
              winWidth={winWidth}
            />
            <AgentIcon
              agent={agent5}
              onClick={() => clickAgent(agent5)}
              winWidth={winWidth}
            />
          </div>
          <div style={roleCountRow}>
            <Typography variant='inherit' style={{ color: 'white' }}>
              {numDuelists} Duelist
            </Typography>
            <Typography variant='inherit' style={{ color: 'white' }}>
              {numControllers} Controller
            </Typography>
            <Typography variant='inherit' style={{ color: 'white' }}>
              {numInitiators} Initiator
            </Typography>
            <Typography variant='inherit' style={{ color: 'white' }}>
              {numSentinels} Sentinel
            </Typography>
          </div>
          <div style={buttonRow}>
            <Button variant='contained' onClick={handleClear}>
              Clear All
            </Button>
            <Button
              variant='contained'
              onClick={handleShareOpen}
              style={shareButton}
            >
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
                  winWidth={winWidth}
                />
              ))}
            </div>
            <div style={selectionRow}>
              {controllers.map((agent) => (
                <AgentIcon
                  size='small'
                  agent={agent}
                  onClick={() => clickAgent(agent)}
                  winWidth={winWidth}
                />
              ))}
            </div>
            <div style={selectionRow}>
              {initiators.map((agent) => (
                <AgentIcon
                  size='small'
                  agent={agent}
                  onClick={() => clickAgent(agent)}
                  winWidth={winWidth}
                />
              ))}
            </div>
            <div style={selectionRow}>
              {sentinels.map((agent) => (
                <AgentIcon
                  size='small'
                  agent={agent}
                  onClick={() => clickAgent(agent)}
                  winWidth={winWidth}
                />
              ))}
            </div>
            <ShareDialog
              open={shareDialogOpen}
              onClose={handleShareClose}
              teamId='abcde'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
