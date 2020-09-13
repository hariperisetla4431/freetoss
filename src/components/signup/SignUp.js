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

import SignUpLayout from './SignUpLayout';

import './SignUp.css'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
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
              <Grid item xs={0} align='left'>
            <FormControlLabel
              control={<Checkbox checked={checked}  onChange={handleChange} value="remember" color="primary" />}
  // label=  "I agree to FreeToss8's "
            />
            </Grid>
            <Grid item xs align='left'>
            <p>I agree to FreeToss8's <Link href="#TermsAndConditions" onClick={handleOpen}>Terms and Conditions</Link></p>
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
            {/* <div> */}
          <h3><b>1. Introduction</b></h3>
            <p>
1.1 These terms and conditions shall govern your use of our website.
<br /></p>

<p>
1.2. By using our website, you accept these terms and conditions in full;
accordingly, if you disagree with these terms and conditions or any part of
these terms and conditions, you must not use our website.
<br /></p>

<p>
1.3 If you [register with our website, submit any material to our website or use
any of our website services], we will ask you to expressly agree to these terms
and conditions.
<br/></p>

<p>
1.4 You must be at least [18] years of age to use our website; by using our
website or agreeing to these terms and conditions, you warrant and represent
to us that you are at least [18] years of age.
<br/></p>

<h3>2. Copyright notice</h3>

<p>
2.1 Copyright (c) [year(s) of first publication] [full name].
<br/></p>

<p>
2.2 Subject to the express provisions of these terms and conditions:
<br/></p>
<p>
(a) we, together with our licensors, own and control all the copyright and
other intellectual property rights in our website and the material on our
website; and
<br/></p>

<p>
(b) all the copyright and other intellectual property rights in our website
and the material on our website are reserved.
<br/></p>

<h3>3. Permission to use website</h3>


<p>
3.1 You may:
<br/></p>
<p>(a) view pages from our website in a web browser;
<br/></p>

<p>
(b) download pages from our website for caching in a web browser;
<br/></p>

<p>(c) print pages from our website [for your own personal and non-
commercial use] [, providing that such printing is not systematic or
excessive];
<br/></p>

<p>(d) [stream audio and video files from our website [using the media player
on our website]]; and
<br/></p>

<p>(e) [use [our website services] by means of a web browser],
[additional list items]
subject to the other provisions of these terms and conditions.
<br/></p>

<p>3.2 Except as expressly permitted by Section 3.1 or the other provisions of these
terms and conditions, you must not download any material from our website
or Save any such material to your computer.
<br/></p>

<p>3.3. You may only use our website for [[your own personal and business purposes]]
OR [[define purposes]]; you must not use our website for any other purposes.
<br/></p>

<p>3.4 Except as expressly permitted by these terms and conditions, you must not
edit or otherwise modify any material on our website.
<br/></p>

<p>3.5 Unless you own or control the relevant rights in the material, you must not:
<br/></p>

<p>(a) republish material from our website (including republication on another
website);
<br/></p>

<p>(b) ~~ sell, rent or sub-license material from our website;
<br/></p>

<p>(c) show any material from our website in public;
<br/></p>

<p>(d) exploit material from our website for a commercial purpose; or
<br/></p>

<p>(e) redistribute material from our website.
<br/></p>

<p>3.6 Notwithstanding Section 3.5, you may redistribute [our newsletter] in [print
and electronic form] to [any person].
<br/></p>

<p>3.7 We reserve the right to suspend or restrict access to our website, to areas of
our website and/or to functionality upon our website. We may, for example,
suspend access to the website [during server maintenance or when we
update the website]. You must not circumvent or bypass, or attempt to
circumvent or bypass, any access restriction measures on the website.
<br/></p>

<h3>4. Feeds</h3>

<p>4.1 You may access [our RSS and Atom feeds] [using any compatible feed reader
or aggregator].
<br/></p>

<p>4.2 By accessing our feeds, you accept these terms and conditions.
<br/></p>

<p>4.3. Subject to your acceptance of these terms and conditions, we grant to you a
non-exclusive, non-transferable, non-sub-licensable licence to display content
from our feeds in unmodified form on any [non-commercial] website owned
and operated by you [, providing that you must not aggregate any of our feed
content with any third-party feed when displaying it in accordance with this
Section 4.3].
<br/></p>

<p>4.4 It is a condition of this licence that you include a credit for us and hyperlink to
our website on each web page where our feed content is published (in such
form as we may specify from time to time, or if we do not specify any
form, in a reasonable form).
<br/></p>

<p>4.5 We may revoke any licence relating to our feeds or feed content at any time,
with or without notice.
<br/></p>

<h3>5. Other social media platforms</h3>

<p>5.1 Our website includes features that enable users to interact with other social
media platforms [ - including [Facebook, Instagram, Twitter, YouTube, LinkedIn]
-] directly from our website.
<br/></p>

<p>5.2 Using the social media features on our website, you may:
<br/></p>

<p>(a) share data or content from our website; and
<br/></p>

<p>(b) like or upvote content from our website.
[additional list items]
<br/></p>

<p>5.3 You acknowledge that the use of the social media platforms is subject to the
terms and conditions of the relevant platform operator and that the use of any
personal data transferred to the platforms is subject to the privacy policy or
notice of the relevant platform operator.
<br/></p>

<p>5.4 Subject to Section 16.1, we will not be liable to you for any loss or damage
arising out of:
<br/></p>

<p>(a) your use of any third-party social media platform; and
<br/></p>

<p>(b) any act or omission of any third-party social media platform operator.
<br/></p>

<p>5.5 When [using social media features on our website or browsing pages on us
website that incorporate social media features], the social media platforms
may collect information about [you and your use of our website and those
features], including by means of cookies. For more information about these
cookies and the use of personal data collected [by us and by the platforms],
see [our privacy and cookies policy].
<br/></p>

<h3>6. Misuse of website</h3>


<p>6.1 You must not:
<br/></p>

<p>(a) use our website in any way or take any action that causes, or may
cause, damage to the website or impairment of the performance,
availability, accessibility, integrity or security of the website;
<br/></p>

<p>(b) use our website in any way that is unlawful, illegal, fraudulent or
harmful, or in connection with any unlawful, illegal, fraudulent or
harmful purpose or activity;
<br/></p>

<p>(c) hack or otherwise tamper with our website;
<br/></p>

<p>(d) probe, scan or test the vulnerability of our website without our
permission;
<br/></p>

<p>(e) circumvent any authentication or security systems or processes on or
relating to our website;
<br/></p>

<p>(f) use our website to copy, store, host, transmit, send, use, publish or
distribute any material which consists of (or is linked to) any spyware,
computer virus, Trojan horse, worm, Keystroke logger, rootkit or other
malicious computer software;
<br/></p>

<p>(g) [impose an unreasonably large load on our website resources (including
bandwidth, storage capacity and processing capacity) ];
<br/></p>

<p>(h) [decrypt or decipher any communications sent by or to our website
without our permission];
<br/></p>

<p>(i) [conduct any systematic or automated data collection activities
(including without limitation scraping, data mining, data extraction and
data harvesting) on or in relation to our website without our express
written consent];
<br/></p>

<p>(j) [access or otherwise interact with our website using any robot, spider or
other automated means [, except for the purpose of [search engine
indexing]]];
<br/></p>

<p>(k) [use our website except by means of our public interfaces];
<br/></p>

<p>(l) [violate the directives set out in the robots.txt file for our website];
<br/></p>

<p>(m) [use data collected from our website for any direct marketing activity
(including without limitation email marketing, SMS marketing,
telemarketing and direct mailing)]; or<br /></p>

<p>(n) [do anything that interferes with the normal use of our website].
[additional list items]
<br/></p>

<p>6.2 You must not use data collected from our website to contact individuals,
companies or other persons or entities.
<br/></p>

<p>6.3. You must ensure that all the information you supply to us through our website,
or in relation to our website, is [true, accurate, current, complete and non-
misleading].
<br/></p>

<h3>7. Registration and accounts</h3>

<p>7.1 To be eligible for [an account] on our website under this Section 7, you must
[be resident or situated in the United Kingdom].
<br/></p>

<span>7.2 You may register for an account with our website by [completing and
submitting the account registration form on our website, and clicking on the
verification link in the email that the website will send to you].
<br/></span>

<span>7.3. You must not allow any other person to use your account to access the
website.
<br/></span>

<span>7.4 You must notify us in writing immediately if you become aware of any
unauthorised use of your account.
<br/></span>

<span>7.5 You must not use any other person's account to access the website [, unless
you have that person's express permission to do so].
<br/></span>

<h3>8. User login details</h3>

<span>8.1 If you register for an account with our website, [we will provide you with] OR
[you will be asked to choose] [a user ID and password].
<br/></span>

<span>8.2 Your user ID must not be liable to mislead and must comply with the content
rules set out in Section 13; you must not use your account or user ID for or in
connection with the impersonation of any person.
<br/></span>

<span>8.3. You must keep your password confidential.
<br/></span>

<span>8.4 You must notify us in writing immediately if you become aware of any
disclosure of your password.
<br/></span>

<span>8.5 You are responsible for any activity on our website arising out of any failure to
keep your password confidential, and may be held liable for any losses arising
out of such a failure.
<br/></span>

<h3>9. Cancellation and suspension of account</h3>

<span>9.1 We may:
<br/></span>

<span>(a) [suspend your account];
<br/></span>

<span>(b) [cancel your account]; and/or
<br/></span>

<span>(c) [edit your account details],
<br/></span>

<span>at any time in our sole discretion with or without notice to you.
<br/></span>

<span>9.2 We will usually cancel an account if it remains unused for a continuous period
of [18 months].
<br/></span>
{/* </div> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUnChecked} color="primary">
            Disagree
          </Button>
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

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
