import React from 'react';
import {createStyles, Grid, makeStyles} from '@material-ui/core';
import Moves from './Moves';
import Sliders from './Sliders';
import ConnectionButton from './ConnectionButton';
import { ws } from '../utils/wsConnection';

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

  const connect = () => {
    const connection = ws({ close: () => setConnected(false) });
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

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={5}>
          <Moves ws={socket}/>
        </Grid>
        <Grid item xs={12} sm={1}>
          <ConnectionButton connected={connected} onClick={connected ? disconnect : connect} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Sliders ws={socket}/>
        </Grid>
      </Grid>
    </div>
  )
};
