import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ProgressBar from './dockProgressBar';

import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import NoteAddIcon from '@material-ui/icons/NoteAdd';

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
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  button: {
    margin: theme.spacing(5),

  },
  input: {
      display: 'none'
  }
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();

  return (
<div align="center">

<input
        // accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={props.handleChange}

      />
<label htmlFor="contained-button-file">
<Button
        size="large"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<NoteAddIcon />}
        component="span"
      >
        Upload
      </Button>
      </label>

<h3 style={{ color: '#FF0000' }} >***Any file uploaded in the dock are public and can be viewed by anyone with your link !!!***</h3>

      <Grid container className="root" spacing={3}>

{/* Card 1 */}

<Grid item xs={12} sm={12}>
        {/* <Paper className={classes.paper} >  
                <h3>Name 1</h3>
                <p><strong>Desc: </strong>Lorem ipsum dolor sit amet.</p>   
        </Paper> */}
        <Paper className={classes.paper} >
    
{/* <form className={classes.root} noValidate autoComplete="off"> */}
      
{
    props.name != null &&
    <div><h3>File Name:</h3>
    <Typography variant="subtitle1" gutterBottom style={{ width: '100%' }} wrap  >
            {props.name}
          </Typography>
    <hr /></div>
}

<br/>
{
    props.progress == 100 ?
    <p>Successfully Uploaded!</p> : <div>
      {
        
          props.progress == 0 ?
          <p>Click Upload to upload the file!</p> : <p>Uploading... {props.progress}</p>
        
          
      }
      </div>
    
}

{
    !props.progress == 0 && <ProgressBar progress={props.progress} style={{ maxWidth: '150%' }} />
}
<Button
        size="large"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        component="span"
        onClick={props.handleUpload}
      >
        Submit
      </Button>


      {/* </form> */}
      {/* <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}

      >
        Delete
      </Button> */}
      </Paper>
</Grid>
</Grid>

    
      </div>
  );

}
