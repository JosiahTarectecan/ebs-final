import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  cardDetails: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    paddingTop: theme.spacing(2),
  },
  emptyButton: {
    marginRight: theme.spacing(2),
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
  },
  
  checkoutButton: {
    marginLeft: 'auto',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
