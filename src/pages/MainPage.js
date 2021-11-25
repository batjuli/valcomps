import React from 'react';

import { useParams } from 'react-router';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AgentIcon from '../components/AgentIcon';
import ShareDialog from '../components/ShareDialog';
import WarningBox from '../components/WarningBox';

import {
  emptyAgent,
  jett,
  phoenix,
  raze,
  reyna,
  yoru,
  astra,
  brimstone,
  omen,
  viper,
  breach,
  skye,
  sova,
  cypher,
  killjoy,
  sage,
  kayo,
  chamber,
  decode,
} from '../util/AgentObjects';

const warnings = {
  flashes: 'No flashes: this team may struggle to enter a site',
  smokes: 'No smokes: this team may struggle to block line of sight',
  sentinels: 'No sentinels: this team may struggle to slow enemies down',
};

const MainPage = () => {
  // agent selection states
  const [agent1, setAgent1] = React.useState(emptyAgent);
  const [agent2, setAgent2] = React.useState(emptyAgent);
  const [agent3, setAgent3] = React.useState(emptyAgent);
  const [agent4, setAgent4] = React.useState(emptyAgent);
  const [agent5, setAgent5] = React.useState(emptyAgent);

  // role count states
  const [numDuelists, setNumDuelists] = React.useState(0);
  const [numControllers, setNumControllers] = React.useState(0);
  const [numInitiators, setNumInitiators] = React.useState(0);
  const [numSentinels, setNumSentinels] = React.useState(0);

  // state for share team dialog
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);

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

  const handleShareOpen = () => {
    setShareDialogOpen(true);
  };

  const handleShareClose = () => {
    setShareDialogOpen(false);
  };

  // agent arrays
  const duelists = [jett, phoenix, raze, reyna, yoru];
  const controllers = [astra, brimstone, omen, viper];
  const initiators = [breach, kayo, skye, sova];
  const sentinels = [chamber, cypher, killjoy, sage];

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
      setAgent1(emptyAgent);
    } else if (agent2 === agent) {
      setAgent2(emptyAgent);
    } else if (agent3 === agent) {
      setAgent3(emptyAgent);
    } else if (agent4 === agent) {
      setAgent4(emptyAgent);
    } else if (agent5 === agent) {
      setAgent5(emptyAgent);
    }
  };

  // adds agent only if there is space
  const addAgent = (agent) => {
    if (agent1 === emptyAgent) {
      setAgent1(agent);
    } else if (agent2 === emptyAgent) {
      setAgent2(agent);
    } else if (agent3 === emptyAgent) {
      setAgent3(agent);
    } else if (agent4 === emptyAgent) {
      setAgent4(agent);
    } else if (agent5 === emptyAgent) {
      setAgent5(agent);
    }
  };

  const clickAgent = (agent) => {
    // if clicking valorant logo, do nothing
    if (agent === emptyAgent) return;
    if (alreadySelected(agent)) {
      // if agent is already selected, unselect it
      removeAgent(agent);
      // else try and add the agent
    } else {
      addAgent(agent);
    }
  };

  const handleClear = () => {
    setAgent1(emptyAgent);
    setAgent2(emptyAgent);
    setAgent3(emptyAgent);
    setAgent4(emptyAgent);
    setAgent5(emptyAgent);
    setNumDuelists(0);
    setNumInitiators(0);
    setNumControllers(0);
    setNumSentinels(0);
  };

  // get team id from url
  let { teamId } = useParams();
  // if has teamid, load it in
  React.useEffect(() => {
    if (teamId) {
      const newTeam = decode(teamId);
      // select the agents
      setAgent1(newTeam[0]);
      setAgent2(newTeam[1]);
      setAgent3(newTeam[2]);
      setAgent4(newTeam[3]);
      setAgent5(newTeam[4]);
    }
  }, [teamId]);

  // use effect hook for whenever an agent is changed
  React.useEffect(() => {
    let nDuel = 0;
    let nCont = 0;
    let nInit = 0;
    let nSent = 0;
    for (let agent of [agent1, agent2, agent3, agent4, agent5]) {
      if (duelists.includes(agent)) {
        nDuel += 1;
      } else if (controllers.includes(agent)) {
        nCont += 1;
      } else if (initiators.includes(agent)) {
        nInit += 1;
      } else if (sentinels.includes(agent)) {
        nSent += 1;
      }
    }
    setNumDuelists(nDuel);
    setNumControllers(nCont);
    setNumInitiators(nInit);
    setNumSentinels(nSent);
    // eslint-disable-next-line
  }, [agent1, agent2, agent3, agent4, agent5]);

  return (
    <Container component='main' maxWidth='md' className='main'>
      <div style={header}>
        <WarningBox warnings={[warnings.flashes, warnings.smokes]} />
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
          <Typography style={{ fontSize: 'calc(10px + 2vmin)' }}>
            {numDuelists} {numDuelists === 1 ? 'Duelist' : 'Duelists'}
          </Typography>
          <Typography style={{ fontSize: 'calc(10px + 2vmin)' }}>
            {numControllers}{' '}
            {numControllers === 1 ? 'Controller' : 'Controllers'}
          </Typography>
          <Typography style={{ fontSize: 'calc(10px + 2vmin)' }}>
            {numInitiators} {numInitiators === 1 ? 'Initiator' : 'Initiators'}
          </Typography>
          <Typography style={{ fontSize: 'calc(10px + 2vmin)' }}>
            {numSentinels} {numSentinels === 1 ? 'Sentinel' : 'Sentinels'}
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
            agent1={agent1}
            agent2={agent2}
            agent3={agent3}
            agent4={agent4}
            agent5={agent5}
          />
        </div>
      </div>
    </Container>
  );
};

const header = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '30px',
};
const agentBox = {
  display: 'flex',
  width: '90vw',
  maxWidth: '800px',
  minWidth: '350px',
  justifyContent: 'space-around',
  marginBottom: '15px',
  marginTop: '30px',
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
const shareButton = {
  backgroundColor: '#FF4655',
  color: '#EBE7E0',
};
const roleCountRow = {
  display: 'flex',
  width: '90vw',
  maxWidth: '700px',
  minWidth: '350px',
  justifyContent: 'space-around',
  marginBottom: '15px',
  color: 'white',
};
const buttonRow = {
  display: 'flex',
  gap: '15px',
};

export default MainPage;
