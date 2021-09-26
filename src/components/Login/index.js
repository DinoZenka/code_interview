import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { Form } from "react-final-form"
import { Link } from "react-router-dom";
import { CustomFormInput } from ".."
import ContinueWith from "../ContinueWith";
import useStyles from './style';

const validateLoginForm = (values) => {
  const errors = {};
  if(!values.email){
    errors.email = 'Please Enter Your Name.';
  } else if(!(values.name.trim())) {
    errors.name = 'Please Do Not Enter Only Spaces.';
  }
  if (!values.password) {
    errors.password = 'Please Enter Your Password.';
  }
  return errors;
}

const Login = () => {
    const styles = useStyles();

    const onSubmit = (data) => {
        alert(data);
      }
      
    return (
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={3} className={styles.formContainer}>
              <ContinueWith />
              <p style={{marginTop: '20px'}}>Or Login with email</p>
              <Form 
                onSubmit={onSubmit}
                subscription={true}
                validate={validateLoginForm}
                render={({handleSubmit, values})=> (
              <>
              <form onSubmit={handleSubmit} className={styles.form}>
                <CustomFormInput 
                    name="email" 
                    label="Email*" 
                    variant='outlined'
                    style={{margin: '10px 0'}} 
                />
                <CustomFormInput 
                    name="password" 
                    label="Password*" 
                    variant="outlined"
                    style={{margin: '10px 0'}}
                />
                <Link to="/forget-password" className={styles.forgetPassword}>
                  Do not remember password?
                </Link>
                <Button 
                  type="submit" 
                  variant='contained'
						      color='primary'
                  style={{width: '150px', margin: '0 auto', marginTop: '30px'}}
                >Login</Button>
              </form>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
              </>
            )}
          />
          </Paper>
        </Grid>
      </Grid>
    )
}

export default Login;
