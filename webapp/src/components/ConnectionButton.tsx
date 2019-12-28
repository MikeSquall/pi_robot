import React from 'react';
import {createStyles, Grid, IconButton, makeStyles, Theme} from '@material-ui/core';
import {red, green} from '@material-ui/core/colors/';
import {PowerSettingsNew} from '@material-ui/icons';

interface ConnectionProps {
  connected: boolean;
  onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        height: '100vh',
      },
    },
    button: {
      marginLeft: 'calc(50% - 18px)',
    },
    active: {
      color: green[500],
    },
    inactive: {
      color: red[500],
    },
  }),
);

export default (props: ConnectionProps) => {
  const classes = useStyles();

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item sm={12} xs={12}>
          <IconButton className={`${classes.button} ${props.connected ? classes.active : classes.inactive}`}
                      onClick={props.onClick}
          >
            <PowerSettingsNew />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
};
