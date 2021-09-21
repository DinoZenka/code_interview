import TextField from '@material-ui/core/TextField';
import React from 'react';
import useStyles from "./style";

const Subscribe = () => {
  const styles = useStyles();
  const [value, setValue] = React.useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>
        <TextField value={value} onChange={changeValue} variant='standard'/>
    </div>
  )
}

export default Subscribe
