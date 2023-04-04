import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 150, // reduce the height to fit the image properly
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // center align the content vertically
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // center align the content vertically
    paddingBottom: 10,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 20, // reduce the font size to fit the quantity properly
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  removeButton: {
    fontSize: 14, // reduce the font size to fit the remove button properly
  },
}));
