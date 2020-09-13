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
      
      {/* <TextField id="standard-required" value={props.testName} onChange={props.handleChange} /> */}
      <TextField variant="standard" margin="normal" required fullWidth id="name" label="Name" name="name" autoComplete="name" autoFocus
          defaultValue={props.name} onChange={props.handleChange}/>

  <br/>

      <TextField variant="standard" margin="normal" required fullWidth id="name" label="Phone" name="phone" autoComplete="name" autoFocus
          defaultValue={props.phone} onChange={props.handleChange}/>
<br/>
      <TextField variant="standard" margin="normal" required fullWidth id="name" label="Email" name="email" autoComplete="name" autoFocus
          defaultValue={props.email} onChange={props.handleChange}/>
<br/>
      <TextField variant="standard" margin="normal" style={{ margin: 50 }} required fullWidth id="name" label="Objective" name="objective" autoComplete="name" autoFocus
          multiline
          rows={5}
          rowsMax={10} defaultValue={props.objective} onChange={props.handleChange} inputProps={{ maxLength: 300 }}/>
<br/>
      <TextField variant="standard" margin="normal" required fullWidth id="name" label="College" name="college" autoComplete="name" autoFocus
          defaultValue={props.college} onChange={props.handleChange} />

<br/>

      

      </form>
      

</div>
  );

}