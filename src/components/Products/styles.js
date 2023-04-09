import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(8), // add some top padding
    paddingBottom: theme.spacing(-9),
    

  },
  root: {
    flexGrow: 1,
  },

  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },

  title: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  message: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    color: '#757575',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  },
  searchField: {
    width: 350,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  message: {
    margin: theme.spacing(2), 
    fontWeight: 'bold', 
    fontSize: '1.2rem', 
    paddingBottom: theme.spacing(-6),
  },

}));

