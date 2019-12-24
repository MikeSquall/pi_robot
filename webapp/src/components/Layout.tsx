import React from 'react';
import {createStyles, Grid, makeStyles} from '@material-ui/core';
import Moves from './Moves';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
    },
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Moves />
        </Grid>
        <Grid item xs={12} sm={6}>sliders</Grid>
      </Grid>
    </div>
  )
};
