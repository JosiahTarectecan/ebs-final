import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '56.25%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#888',
  },
  productDescription: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: '0.9rem',
  },
  selectLabel: {
    paddingTop: theme.spacing(2),
    fontWeight: 'bold',
  },
  variantSelect: {
    paddingBottom: theme.spacing(2),
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
