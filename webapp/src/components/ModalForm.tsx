import React from 'react';
import {Button, createStyles, makeStyles, Modal, TextField, Theme} from '@material-ui/core';

interface ModalFormProps {
  open: boolean;
  serverUrl: string;
  onValid: (url: string) => void;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    button: {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

export default (props: ModalFormProps) => {
  const classes = useStyles();
  const [url, setUrl] = React.useState<string>(props.serverUrl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value);

  const handleClick = () => {
    props.onValid(url);
    props.onClose();
  };

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <form noValidate className={classes.root}>
        <TextField variant="outlined" label="Server Url" value={url} onChange={handleChange}/>
        <div>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={handleClick} className={classes.button}>Set server URL</Button>
        </div>
      </form>
    </Modal>
  );
};
