import React from 'react';
import {createStyles, IconButton, makeStyles, Theme} from '@material-ui/core';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons/';

interface MoveButtonProps {
  direction: 'moveForward' | 'moveBackward' | 'turnLeft' | 'turnRight';
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
      case 'moveForward':
        return <KeyboardArrowUp />;
      case 'moveBackward':
        return <KeyboardArrowDown />;
      case 'turnLeft':
        return <KeyboardArrowLeft />;
      case 'turnRight':
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
