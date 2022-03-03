import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import theme from '../../theme';

const GrowdevBanner = styled(Grid)({
  background: '#09054A',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 80,
});

const GrowdevTexto = styled(Typography)({
  fontSize: '5em',
  display: 'flex',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5em',
  },
});

const GrowdevGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export { GrowdevBanner, GrowdevTexto, GrowdevGrid };
