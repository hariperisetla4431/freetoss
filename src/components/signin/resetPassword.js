import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function FormPropsTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        {/* <TextField id="standard-required" value={props.testName} onChange={props.handleChange} /> */}
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus

              defaultValue={props.email}

              onChange={props.handleChange}

            />
            <br />    
            
        <Button variant="contained" color="primary" onClick={props.handleResetPassword}>
        Reset Password
      </Button>

        </form>
  );

}