import React from 'react';
import {IconButton, createStyles, Grid, makeStyles, Theme} from '@material-ui/core';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      margin: 'auto',
    },
    button: {
      border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`
    },
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} alignItems="center"  className={classes.root}>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <IconButton className={classes.button}>
            <KeyboardArrowUp/>
          </IconButton>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={3} />
        <Grid item xs={2}>
          <IconButton className={classes.button}>
            <KeyboardArrowLeft/>
          </IconButton>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={2}>
          <IconButton className={classes.button}>
            <KeyboardArrowRight/>
          </IconButton>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={5} />
        <Grid item xs={2}>
          <IconButton className={classes.button}>
            <KeyboardArrowDown/>
          </IconButton>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </>
  )
}
