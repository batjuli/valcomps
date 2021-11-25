import React from 'react';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const height = 110;
const width = 370;
const borderSize = 5;

const warnings = [
  'No flashes: this team may struggle to enter a site',
  'No smokes: this team may struggle to block line of sight',
  'No sentinels: this team may struggle to slow enemies down',
];

const WarningBox = () => {
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
      <div style={header}>{warnings.length} warnings</div>
      <div style={body}>
        {warnings[curr]}
        <div style={arrows}>
          <KeyboardArrowUpIcon onClick={handleClickUp} />
          <KeyboardArrowDownIcon onClick={handleClickDown} />
        </div>
      </div>
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
};

export default WarningBox;
