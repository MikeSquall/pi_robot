import React from 'react';
import {createStyles, Grid, makeStyles, Slider, Theme, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        height: '100vh',
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slider: {
      height: '30vh',
      [theme.breakpoints.up('sm')]: {
        height: '70vh',
      },
    },
    title: {
      padding: theme.spacing(2),
      color: theme.palette.background.paper,
    },
  }),
);

export default () => {
  const classes = useStyles();
  const [grabberGrab, setGrabberGrab] = React.useState<number>(0);
  const [grabberTilt, setGrabberTilt] = React.useState<number>(0);
  const [grabberHeight, setGrabberHeight] = React.useState<number>(0);

  const handleGrab = (_: React.ChangeEvent<{}>, value: number | number[]) => {
    setGrabberGrab(value as number);
  };

  const handleTilt = (_: React.ChangeEvent<{}>, value: number | number[]) => {
    setGrabberTilt(value as number);
  };

  const handleHeight = (_: React.ChangeEvent<{}>, value: number | number[]) => {
    setGrabberHeight(value as number);
  };

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item xs={4} sm={4} className={classes.container}>
          <Typography className={classes.title}>Grab</Typography>
          <div className={classes.slider}>
            <Slider orientation="vertical"
              valueLabelDisplay="on"
              value={grabberGrab}
              min={0}
              max={100}
              onChange={handleGrab}
            />
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className={classes.container}>
          <Typography className={classes.title}>Tilt</Typography>
          <div className={classes.slider}>
            <Slider orientation="vertical"
              valueLabelDisplay="on"
              value={grabberTilt}
              min={0}
              max={100}
              onChange={handleTilt}
            />
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className={classes.container}>
          <Typography className={classes.title}>Height</Typography>
          <div className={classes.slider}>
            <Slider orientation="vertical"
              valueLabelDisplay="on"
              value={grabberHeight}
              min={0}
              max={100}
              onChange={handleHeight}
            />
          </div>
        </Grid>
      </Grid>
    </>
  )
}
