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
  message: {
    margin: theme.spacing(2), 
    fontWeight: 'bold', 
    fontSize: '1.2rem', 
    paddingBottom: theme.spacing(-6),
  },

}));

