import React from 'react';
import { createStyles, Grid, makeStyles } from '@material-ui/core';
import env from '../env';
import Moves from './Moves';
import Sliders from './Sliders';
import ConnectionButton from './ConnectionButton';
import { ws } from '../utils/wsConnection';
import ModalForm from './ModalForm';
import ServerInfo from './ServerInfo';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
    },
  }),
);

export default () => {
  const classes = useStyles();
  const [connected, setConnected] = React.useState<boolean>(false);
  const [socket, setSocket] = React.useState<WebSocket | undefined>(undefined);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [serverUrl, setServerUrl] = React.useState<string>(`ws://${env.SERVER_HOST}:${env.SERVER_PORT}`);

  const connect = () => {
    const connection = ws({ close: () => setConnected(false), serverUrl });
    if (connection) {
      setSocket(connection);
      setConnected(true);
    }
  };

  const disconnect = () => {
    socket!.close();
    setSocket(undefined);
    setConnected(false);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <ServerInfo serverUrl={serverUrl} />
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={5}>
          <Moves ws={socket}/>
        </Grid>
        <Grid item xs={12} sm={1}>
          <ConnectionButton connected={connected} onClick={connected ? disconnect : connect} openModal={handleOpenModal}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Sliders ws={socket}/>
        </Grid>
      </Grid>
      <ModalForm open={openModal} serverUrl={serverUrl} onValid={setServerUrl} onClose={handleCloseModal}/>
    </div>
  )
};
