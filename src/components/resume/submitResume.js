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
    full: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50ch',
        }
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();

  return (
<div>
<form className={classes.root} noValidate autoComplete="off">

<Button style={{margin: "10px"}}
  variant="contained" color="primary" type="button"
  onClick={props.handleAddShareholder}
  
>
  +
</Button>

<Button variant="contained" color="primary" onClick={props.handleClick}>
      Submit
    </Button>
      </form>
    

  
</div>
  );

}