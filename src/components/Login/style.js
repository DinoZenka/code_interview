import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    textAlign: 'left', 
    padding: '30px 40px',
    marginBottom: '50px',
  },
  loginImage: {
    marginRight: '10px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex', 
    flexDirection: "column"
  },
  formInput: {
    padding: '100px'
  },
  forgetPassword: {
    textAlign: 'right',
    textDecoration: 'none',
    color: 'black',
    '&:hover':{
      textDecoration: 'underline',
    }
  }

}));

export default useStyles;