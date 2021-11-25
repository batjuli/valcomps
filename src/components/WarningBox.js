import React from 'react';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const height = 110;
const width = 370;
const borderSize = 5;

const numWarnings = 3;
const warnings = [
  'No flashes: this team may struggle to enter a site',
  'No smokes: this team may struggle to block line of sight',
  'No sentinels: this team may struggle to slow enemies down',
];

const WarningBox = () => {
  return (
    <div style={container}>
      <div style={cutOut}></div>
      <div style={header}>3 warnings</div>
      <div style={body}>No flashes: this team may struggle to take a site</div>
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
  color: 'white',
  fontSize: '20px',
  marginTop: '40px',
  marginLeft: '10px',
};

export default WarningBox;
