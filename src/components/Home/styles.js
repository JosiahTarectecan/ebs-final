import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

  body: {
    margin: 0,

  },
    root: {
        margin: 0,
        padding: 0,
        fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        position: 'relative',
        marginLeft: '-10px',
        marginBottom: '-50px',
        marginRight: '-20px',
      },
      main: {
        width: '100%',
        height: '100%',
        position: 'relative',
      },
      video: {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
      },
      content: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    
}));

export default useStyles;
