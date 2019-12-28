import React from 'react';
import {createStyles, Grid, makeStyles} from '@material-ui/core';
import Moves from './Moves';
import Sliders from './Sliders';
import ConnectionButton from './ConnectionButton';

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

  const connect = () => {
    setConnected(true);
  };

  const disconnect = () => {
    setConnected(false);
  };

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={5}>
          <Moves />
        </Grid>
        <Grid item xs={12} sm={1}>
          <ConnectionButton connected={connected} onClick={connected ? disconnect : connect} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Sliders />
        </Grid>
      </Grid>
    </div>
  )
};
