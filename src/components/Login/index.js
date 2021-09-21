import { Button, Grid, Paper } from "@material-ui/core"
import { Form } from "react-final-form"
import { CustomFormInput } from ".."
import { IconFB, IconGitHub, IconLinkedIn, IconGoogle } from "../../assets"

const Login = () => {
    const onSubmit = (data) => {
        console.log(data);
      }
      
    return (
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={3} style={{textAlign: 'left', padding: '30px 40px'}}>
              <p>Continue with</p>
              <IconFB width={40} />
              <IconGoogle width={40} />
              <IconGitHub width={40} height={40}/>
              <IconLinkedIn width={40} />
              <p>Or Login with email</p>
              <Form 
            onSubmit={onSubmit}
            render={({handleSubmit, values})=> (
              <>
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: "column"}}>
                <CustomFormInput name="email" label="Email" />
                <CustomFormInput name="password" label="Password" />
                <Button 
                  type="submit" 
                  variant='contained'
						      color='primary'
                >Send form</Button>
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
