import React from 'react';
import { Button, Grid, Paper, FormControl, InputLabel, MenuItem } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import { CustomFormInput } from "..";

import { Checkboxes, Radios, Select } from 'mui-rff';
import CustomMultiple from './customMultiple/index';
import { Link } from 'react-router-dom';
import ContinueWith from '../ContinueWith';
import useStyles from './style';
import { validateSignupForm } from '../../constants/forms';

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const Signup = () => { 
    const styles = useStyles();

    const onSubmit = (data) => {
      alert(JSON.stringify(data, null, 2));
    }
 
    return (
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={3} className={styles.formContainer}>
              <ContinueWith />
              <p style={{marginTop: '20px'}}>Or Signup with email</p>
              <Form 
                onSubmit={onSubmit}
                subscription={true}
                validate={validateSignupForm}
                initialValues={{
                  type: "student",
                  skills: [],
                }}
                render={({handleSubmit, values})=> (
              <>
              <form onSubmit={handleSubmit} className={styles.form}>
              <Radios
                name="type"
                label="I'm"
                formControlProps={{ margin: 'normal' }}
                radioGroupProps={{ row: true }}
                data={[
                  {label: 'Student', value: 'student'},
                  {label: 'Professional', value: 'professional'}
                ]}
              />

                <CustomFormInput 
                    name="name" 
                    label="Name*" 
                    variant='outlined'
                    style={{margin: '10px 0'}} 
                />
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
                <CustomFormInput 
                    name="confirm_password" 
                    label="Confirm password*" 
                    variant="outlined"
                    style={{margin: '10px 0', marginBottom: 20}}
                />

                <Select 
                    name="gender" 
                    label="Gender" 
                    variant="outlined" 
                    menuItemProps={{ variant: "outlined" }}
                    SelectDisplayProps={{variant: 'outlined'}}
                    className={styles.inputMargin}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>

                <Condition when="type" is="student">
                  <CustomFormInput 
                      name="college" 
                      label="College*" 
                      variant="outlined"
                      style={{margin: '10px 0', marginTop: 20}}
                  />
                </Condition>
                <Condition when="type" is="professional">
                  <CustomFormInput 
                      name="company" 
                      label="Company*" 
                      variant="outlined"
                      style={{margin: '10px 0', marginTop: 20}}
                  />
                </Condition>

                <CustomMultiple name="skills" />

                <Checkboxes
                  name="privacy"
                  required={true}
                  data={{label:(
                    <div>
                      <span>I accept the </span>
                      <Link to={'/terms'} className={styles.link}>terms of use</Link>
                      <span> and </span>
                      <Link to={'/privacy'} className={styles.link}>privacy policy</Link>
                      </div>
                  ), value: 'accepted'}}
                />

                <Button 
                  type="submit" 
                  variant='contained'
						      color='primary'
                  style={{width: '150px', margin: '0 auto', marginTop: '30px'}}
                >Signup</Button>
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


export default Signup
