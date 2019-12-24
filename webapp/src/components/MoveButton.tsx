import React from 'react';
import {createStyles, IconButton, makeStyles, Theme} from '@material-ui/core';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons/';

interface MoveButtonProps {
  direction: 'up' | 'down' | 'left' | 'right';
  onPress: (direction: string) => (event: React.PointerEvent) => void;
  onReleased: (direction: string) => (event: React.PointerEvent) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`
    },
  }),
);

export default (props: MoveButtonProps) => {
  const classes = useStyles();

  const icon = () => {
    switch (props.direction) {
      case 'up':
        return <KeyboardArrowUp />;
      case 'down':
        return <KeyboardArrowDown />;
      case 'left':
        return <KeyboardArrowLeft />;
      case 'right':
        return <KeyboardArrowRight />;
    }
  };

  return (
    <IconButton className={classes.button}
                onPointerDown={props.onPress(props.direction)}
                onPointerUp={props.onReleased(props.direction)}
    >
      {icon()}
    </IconButton>
  )
}
