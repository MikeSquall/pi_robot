import { createMuiTheme } from "@material-ui/core";

const lightGrey = '#e6e6e6';
const darkGrey = '#1c1c1c';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: darkGrey,
      paper: lightGrey,
    },
  },
  overrides: {
    MuiSlider: {
      root: {
        color: '#df0101',
        height: 8,
        width: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
          boxShadow: 'inherit',
        },
      },
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        borderRadius: 8,
        background: 'linear-gradient(0deg, rgba(254,208,207,1) 0%, rgba(223,1,1,1) 100%)',
      },
      rail: {
        borderRadius: 8,
      },
      vertical: {
        '& .MuiSlider-rail': {
          width: '16px !important',
        },
        '& .MuiSlider-track': {
          width: '16px !important',
        },
        '& .MuiSlider-thumb': {
          marginLeft: '-4px !important',
        },
      },
    },
  },
});
