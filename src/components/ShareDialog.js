import React from 'react';
import { Dialog, Typography, Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const ShareDialog = (props) => {
  const { onClose, open, teamId } = props;

  const textAreaRef = React.useRef(null);

  const copyTeamLinkToClipboard = () => {
    // Get the text area by its ref
    textAreaRef.current.select();
    document.execCommand('copy');
  };

  const container = {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

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
          value={teamId}
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
