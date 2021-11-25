import React from 'react';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';

const height = 110;
const width = 370;
const borderSize = 5;

const WarningBox = ({ warnings }) => {
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
          <Typography
            style={{ fontSize: 'calc(10px + 1.2vmin)', textAlign: 'center' }}
          >
            No warnings, this is a well balanced team!
          </Typography>
        </div>
      ) : (
        <div style={body}>
          <Typography
            style={{ fontSize: 'calc(10px + 1.2vmin)', textAlign: 'center' }}
          >
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
