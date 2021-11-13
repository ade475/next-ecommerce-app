import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#AA4A44',

    '& a': {
      color: '#fff',
      marginLeft: 10,
    },
  },
  toolbar: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  Card: {
    maxHeight: 450,
    maxWidth: 345,
  },
  Media: {
    objectFit: 'cover',
    width: '100%',
  },

  main: {
    minHeight: '80vh',
  },
  CardActionArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fcde67',
    color: '#000',
  },
});
export default useStyles;
