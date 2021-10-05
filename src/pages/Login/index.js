import React from 'react';
import { Login, Signup } from '../../components';
import { Tab, AppBar } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

const LoginPage = () => {
    const [value, setValue] = React.useState('login');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <TabContext value={value}>
          <AppBar position='static' color='default' style={{width: '500px', margin: '0 auto', marginTop: '50px'}}>
            <TabList 
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
            >
                <Tab label='Login' value='login' style={{width: '50%'}}/>
                <Tab label='Signup'	value='signup' style={{width: '50%'}}/>
            </TabList>
          </AppBar>
          <TabPanel value='login' style={{paddingTop: '0', width: '500px', margin: '0 auto'}}>
            <Login />
          </TabPanel>
          <TabPanel value='signup' style={{paddingTop: '0', width: '500px', margin: '0 auto'}}>
            <Signup />
          </TabPanel>
      </TabContext>
  
    )
  }

  export default LoginPage;