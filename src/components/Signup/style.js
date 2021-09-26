import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  formContainer: {
    textAlign: 'left', 
    padding: '30px 40px',
    marginBottom: '50px',
  },
  form: {
    display: 'flex', 
    flexDirection: "column"
  },
  formInput: {
    padding: '100px'
  },
  inputMargin: {
  },
  link: {
    color: 'black',
    textTransform: 'Capitalize'
  }

}));

export default useStyles;