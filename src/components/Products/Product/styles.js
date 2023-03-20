import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // align items to center the Select component
    paddingBottom: 0, // remove bottom padding to make room for the Select component
  },
  select: {
    height: '40px', // set a height to make the Select component visible
    width: '60px',
    fontSize: '1rem',
  },
}));
