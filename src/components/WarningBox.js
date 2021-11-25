import React from 'react';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';

const height = 110;
const width = 350;
const borderSize = 5;

const allWarnings = {
  duelists: 'No duelists: this team may struggle to win engagements',
  controllers: 'No controllers: this team may struggle to slice up territory',
  initiators: 'No initiators: this team may struggle to enter contested ground',
  sentinels: 'No sentinels: this team may struggle to lock areas down',
  flashes: 'No flashes: this team may struggle to contest angles',
  smokes: 'No smokes: this team may struggle to block line of sight',
};

// removes a specific message/value from an array
const removeMessage = (arr, val) => {
  const ix = arr.indexOf(val);
  if (ix > -1) {
    arr.splice(ix, 1);
  }
};

const WarningBox = ({ agent1, agent2, agent3, agent4, agent5 }) => {
  // state for warnings
  const [warnings, setWarnings] = React.useState(Object.values(allWarnings));

  // useeffect for checking warnings after agent change
  React.useEffect(() => {
    let _warnings = Object.values(allWarnings);
    // iterate through agents and update warnings
    for (let agent of [agent1, agent2, agent3, agent4, agent5]) {
      // check role
      switch (agent.role) {
        case 'Duelist':
          removeMessage(_warnings, allWarnings.duelists);
          break;
        case 'Controller':
          removeMessage(_warnings, allWarnings.controllers);
          break;
        case 'Initiator':
          removeMessage(_warnings, allWarnings.initiators);
          break;
        case 'Sentinel':
          removeMessage(_warnings, allWarnings.sentinels);
          break;
        default:
          break;
      }
      // check smokes
      if (agent.smoke) {
        removeMessage(_warnings, allWarnings.smokes);
      }
      // check flashes
      if (agent.flash) {
        removeMessage(_warnings, allWarnings.flashes);
      }
    }
    setWarnings(_warnings);
  }, [agent1, agent2, agent3, agent4, agent5]);

  // state for what warning is currently visible
  const [curr, setCurr] = React.useState(0);

  const handleClickUp = () => {
    if (curr === 0) {
      setCurr(warnings.length - 1);
    } else {
      setCurr(curr - 1);
    }
  };

  const handleClickDown = () => {
    if (curr === warnings.length - 1) {
      setCurr(0);
    } else {
      setCurr(curr + 1);
    }
  };

  return (
    <div style={container}>
      <div style={cutOut}></div>
      <div style={header}>
        {warnings.length} {warnings.length === 1 ? 'warning' : 'warnings'}
      </div>
      {warnings.length === 0 ? (
        <div style={body}>
          <Typography style={{ textAlign: 'center' }} variant='subtitle'>
            No warnings, this is a well balanced team!
          </Typography>
        </div>
      ) : (
        <div style={body}>
          <Typography style={{ textAlign: 'center' }} variant='subtitle'>
            {warnings[curr]}
          </Typography>
          <div style={arrows}>
            <KeyboardArrowUpIcon onClick={handleClickUp} />
            <KeyboardArrowDownIcon onClick={handleClickDown} />
          </div>
        </div>
      )}
    </div>
  );
};

const container = {
  height: `${height}px`,
  width: `${width}px`,
  border: `${borderSize}px solid #FF4655`,
  position: 'relative',
};

const cutOut = {
  position: 'absolute',
  width: '0',
  top: `-${borderSize}px`,
  right: `-${borderSize}px`,
  borderTop: '35px solid #101823',
  borderLeft: '30px solid #FF4655',
};

const header = {
  position: 'absolute',
  backgroundColor: '#FF4655',
  color: 'white',
  width: `${width - 25}px`,
  height: '30px',
  textAlign: 'center',
  fontSize: '20px',
  margin: 'auto',
};

const body = {
  display: 'flex',
  color: 'white',
  fontSize: '20px',
  marginTop: '40px',
  marginLeft: '10px',
  marginRight: '10px',
  alignItems: 'center',
};

const arrows = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginLeft: '5px',
};

export default WarningBox;
