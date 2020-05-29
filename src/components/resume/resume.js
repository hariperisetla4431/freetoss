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
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus

              defaultValue={props.name}

              onChange={props.handleChange}

            />

            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="college"
              autoComplete="name"
              autoFocus

              defaultValue={props.college}

              onChange={props.handleChange}

            />
        <Button variant="contained" color="primary" onClick={props.handleClick}>
        Test
      </Button>

        </form>
  );

}