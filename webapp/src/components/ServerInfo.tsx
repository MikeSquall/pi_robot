import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

interface ServerInfoProps {
  serverUrl: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
    },
  }),
);

export default (props: ServerInfoProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {`Server url: ${props.serverUrl}`}
    </div>
  );
};
