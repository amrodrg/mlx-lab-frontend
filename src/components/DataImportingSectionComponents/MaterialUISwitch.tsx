import {styled} from '@material-ui/styles';
import {Switch} from '@mui/material';

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  marginBottom: 12,
  marginRight: 10,
  marginLeft: 20,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(2px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:  '#9c27b0',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#9c27b0',
    width: 32,
    height: 32,
    '&:before': {
      content: '\'\'',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor:'#8796A5',
    borderRadius: 20 / 2,
  },
}));
