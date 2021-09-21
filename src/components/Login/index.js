import { Button, Grid, Paper } from "@material-ui/core"
import { Form } from "react-final-form"
import { CustomFormInput } from ".."
import { IconFB, IconGitHub, IconLinkedIn, IconGoogle } from "../../assets"
import useStyles from './style';

const validation = (values) => {
  const err = {};
  if(!values.email){
    values['email'] = 'Required field'
  }
  return err;
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
              <p>Continue with</p>
              <IconFB width={40} className={styles.loginImage} />
              <IconGoogle width={40} className={styles.loginImage} />
              <IconGitHub width={40} height={40} className={styles.loginImage} />
              <IconLinkedIn width={40} className={styles.loginImage} />
              <p style={{marginTop: '20px'}}>Or Login with email</p>
              <Form 
                onSubmit={onSubmit}
                subscription={true}
                validate={validation}
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
