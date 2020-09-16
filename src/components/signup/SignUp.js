import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import SignUpImg from '../../img/signup.png';
import Logo from '../../img/logoh.svg'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import TermsAndConditions from './T&C/terms&conditions';
import SignUpLayout from './SignUpLayout';

import './SignUp.css'



function Copyright() {
  return (
    <div>
      <Typography variant="body2" style={{ color: '#000', fontSize: '1em' }} align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://freetoss8.web.app/">
        FreeToss8
        
      </Link>{' 2020 '}
      

    </Typography>
    <a href="https://madewithlove.org.in" className="madeWithLove" style={{ 
      fontSize: '1em',
    color: '#000', }} target="_blank">Made with <span style={{color: '#e74c3c',
    
     }}>&hearts;</span> in India</a>
    </div>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${SignUpImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  modalStyle:{
    position:'absolute',
    top:'10%',
    left:'10%',
    overflow:'scroll',
    height:'100%',
    display:'block'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    width: '50%',
    height: '50%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'hidden'
  },

  content: {
    padding: 12,
    overflow: 'scroll',
  }
}));

export default function SignUpSide(props) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleUnChecked = () => {
    setChecked(false);
    setOpen(false);
  };

  const handleChecked = () => {
    setChecked(true);
    setOpen(false);

    

  };

 

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // const submitButton = () => {

  //   props.signUpUser(); 
  //   props.toggleAlert();
  //   // if(checked == true){
  //   //   return <SignUpLayout signUpUser ={props.signUpUser} />
  //   // }
  //   // else
  //   // alert("Check the terms")
  // }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}> */}
            {/* <LockOutlinedIcon /> */}
            <img src={Logo} alt="myfile" width="100%" style={{ width: "300px", padding: '20px' }} />
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="displayName"
              label="Display Name"
              name="displayName"
              autoComplete="displayName"
              autoFocus

              defaultValue={props.displayName}

              onChange={props.handleChange}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              

              defaultValue={props.email}

              onChange={props.handleChange}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

              defaultValue={props.password}

              onChange={props.handleChange}

            />

            <Grid container>
              {/* <Grid item xs={0} align='left'>
            <FormControlLabel
              control={<Checkbox checked={checked}  onChange={handleChange} value="remember" color="primary" />}
  // label=  "I agree to FreeToss8's "
            />
            </Grid> */}
            <Grid item xs align='center'>
            <h3>FreeToss8's <Link href="#TermsAndConditions" onClick={handleOpen}>Terms and Conditions</Link></h3>
            </Grid>
            <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"FreeToss8 - Terms and Conditions"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{ textAlign: 'justify'}}>

            <TermsAndConditions />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleUnChecked} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleChecked} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
            {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <div className={classes.content}>
            
</div>
          </div>
        </Fade>
      </Modal> */}
            </Grid>

            <Collapse in={props.onAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}

              onClick={props.signUpUser}
            >
              Sign Up
            </Button>

          <Grid container>
          <Grid item xs align='center'>
              <p>By Signing up you are agreeing all the terms and conditions of FreeToss8</p>
              </Grid>
          </Grid>

            <Grid container>
            
              <Grid item xs align='center'>
              <p>Already have an account? <Link href="#login" onClick={props.handleClick} >{"Login here"}</Link></p>
              </Grid>
            </Grid>
            <Grid container>
            <Grid item xs>
            <Divider style={{ margin: "30px 0px" }}/>
            </Grid>
            <Grid item xs={2} align='center'>
            <p style={{ margin: "20px 0px"}}>Or</p>
            </Grid>
            <Grid item xs>
            <Divider style={{ margin: "30px 0px" }}/>
            </Grid>
            </Grid>

            <Grid container>
              <Grid item xs align='center'>
<Button onClick={props.signInGoogle}>
<div className='g-sign-in-button'>
  <div className='content-wrapper'>
  <div className='logo-wrapper'>  
    <img src='https://developers.google.com/identity/images/g-logo.png'/>
    </div>  
    <span className='text-container'> 
      <span>Sign up with Google</span>
    </span>
  </div>  
</div>
</Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs align='center' style={{ padding: '10px' }}>
                <Link href="https://github.com/hariperisetla4431/Freetoss" target="_blank" variant="h5">Why FreeToss8?</Link> 
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
