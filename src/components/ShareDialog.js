import React from 'react';
import { Dialog, Typography, Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const ShareDialog = (props) => {
  const { onClose, open, agent1, agent2, agent3, agent4, agent5 } = props;

  const textAreaRef = React.useRef(null);

  const copyTeamLinkToClipboard = () => {
    // Get the text area by its ref
    textAreaRef.current.select();
    document.execCommand('copy');
    console.log(agent1.code);
  };

  const container = {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  // console.log(window.location.origin); useful for share team url

  let teamUrl =
    window.location.origin +
    '/' +
    agent1.code +
    agent2.code +
    agent3.code +
    agent4.code +
    agent5.code;

  return (
    <Dialog
      id='shareTeamDialog'
      onClose={onClose}
      aria-labelledby='share-team-dialog-title'
      open={open}
      fullWidth
    >
      <div style={container}>
        <Typography id='share-team-dialog-title' component='h1' variant='h4'>
          Share team
        </Typography>
        <textarea
          ref={textAreaRef}
          value={teamUrl}
          style={{ width: '280px', height: '1em' }}
          readOnly
        />
        <Button
          variant='contained'
          color='default'
          startIcon={<FileCopyIcon />}
          onClick={copyTeamLinkToClipboard}
        >
          Copy share link to clipboard
        </Button>
      </div>
    </Dialog>
  );
};

export default ShareDialog;
