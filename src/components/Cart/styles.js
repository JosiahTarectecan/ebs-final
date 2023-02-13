import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    margin: theme.spacing(2, 0, 4),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  cardDetails: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyButton: {
    marginRight: theme.spacing(2),
  },
  checkoutButton: {
    marginLeft: 'auto',
  },
}));