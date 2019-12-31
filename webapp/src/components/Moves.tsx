import React from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import MoveButton from './MoveButton';

interface MovesProps {
  ws?: WebSocket;
}

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

export default (props: MovesProps) => {
  const classes = useStyles();
  const { ws } = props;

  // @ts-ignore
  const handlePressDirection = (direction: string) => () => ws && ws.send(JSON.stringify({ command: direction }));
  const handleReleaseDirection = () => () => ws && ws.send(JSON.stringify({ command: 'stop' }));

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item sm={12} xs={12} className={classes.blankBtnLine}/>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={2} xs={2}>
          <MoveButton direction="moveForward" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={3} xs={2}/>
        <Grid item sm={2} xs={3} className={classes.xsCenteredBtn}>
          <MoveButton direction="moveBackward" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={2} xs={2}/>
        <Grid item sm={2} xs={3} className={classes.xsCenteredBtn}>
          <MoveButton direction="turnRight" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={3} xs={2}/>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={2} xs={2}>
          <MoveButton direction="turnLeft" onPress={handlePressDirection} onReleased={handleReleaseDirection}/>
        </Grid>
        <Grid item sm={5} xs={5}/>
        <Grid item sm={12} xs={12} className={classes.blankBtnLine}/>
      </Grid>
    </>
  )
}
