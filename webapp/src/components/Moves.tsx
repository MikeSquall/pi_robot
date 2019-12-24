import React from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import MoveButton from './MoveButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        height: '100vh',
      },
    },
    blankBtnLine: {
      height: '23%',
      [theme.breakpoints.up('sm')]: {
        height: '20vh',
      },
    },
    xsCenteredBtn: {
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  }),
);

export default () => {
  const classes = useStyles();

  const handlePressDirection = (direction: string) => () => console.log(`button pressed: ${direction}`);
  const handleReleaseDirection = (direction: string) => () => console.log(`button released: ${direction}`);

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item sm={12} xs={12} className={classes.blankBtnLine}/>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={2} xs={2}>
          <MoveButton direction="up" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={3} xs={2}/>
        <Grid item sm={2} xs={3} className={classes.xsCenteredBtn}>
          <MoveButton direction="left" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={2} xs={2}/>
        <Grid item sm={2} xs={3} className={classes.xsCenteredBtn}>
          <MoveButton direction="right" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={3} xs={2}/>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={2} xs={2}>
          <MoveButton direction="down" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={12} xs={12} className={classes.blankBtnLine}/>
      </Grid>
    </>
  )
}
