import React from 'react';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
  height: '110px',
  width: '300px',
  border: '5px solid #FF4655',
  position: 'relative',
};

const cutOut = {
  position: 'absolute',
  width: '0',
  top: '-5px',
  right: '-5px',
  borderTop: '35px solid #101823',
  borderLeft: '30px solid #FF4655',
};

const header = {
  position: 'absolute',
  backgroundColor: '#FF4655',
  color: 'white',
  width: '275px',
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
