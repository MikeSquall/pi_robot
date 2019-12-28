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
        height: '60vh',
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

  const renderSlider = (
    title: string,
    value: number,
    onChange: (_: React.ChangeEvent<{}>, value: number | number[]) => void
  ) => (
    <Grid item xs={4} sm={4} className={classes.container}>
      <Typography className={classes.title}>{title}</Typography>
      <div className={classes.slider}>
        <Slider orientation="vertical"
                valueLabelDisplay="on"
                value={value}
                min={0}
                max={100}
                onChange={onChange}
        />
      </div>
    </Grid>
  );

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        {renderSlider('Grab', grabberGrab, handleGrab)}
        {renderSlider('Tilt', grabberTilt, handleTilt)}
        {renderSlider('Height', grabberHeight, handleHeight)}
      </Grid>
    </>
  )
}
