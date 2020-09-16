import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';

import { Link as LinkRouter ,withRouter } from 'react-router-dom';

import MyFiles from '../../img/download.svg'

import FreeTossLogoHorizontal from '../../img/logoh.svg';
import AvatarPopUp from '../../components/navbar/avatarpopup';

import AccountList from './listItems';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import ShareIcon from '@material-ui/icons/Share';
import HelpIcon from '@material-ui/icons/Help';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import "./dashboard.css";

import Dashboard from './dashboard';
import FileUpload from '../fileupload/fileupload';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import PersonIcon from '@material-ui/icons/Person';

import Help from '../help&feedback/help'
import Upload from '../fileupload/fileupload';
import Documents from '../documents/documents';
import Share from '../share/share';

import Retrieval from '../documents/retrieve'
import DockUpload from '../dock/dockUpload';
import Privacy from '../privacy/privacy'
import Logo from '../../img/logo.svg';

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

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 10, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '30px 8px',
    ...theme.mixins.toolbar,
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    maxWidth: 250,
    padding: 12,
  },
}));




 function DashboardLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  let page;
  if(props.page === 'upload'){ 
    page = <Upload user={props.user} signout={props.signout}/>;           
  }
  else if(props.page === 'dock-upload'){ 
    page = <DockUpload user={props.user} signout={props.signout}/>;           
  }
  else if(props.page === 'my documents'){
    page = <Documents user={props.user} signout={props.signout}/>;
  }
  else if(props.page === 'image'){
    page = <Retrieval user={props.user} page={props.page} signout={props.signout}/>;
  }
  else if(props.page === 'pdf'){
    page = <Retrieval user={props.user} page={props.page} signout={props.signout}/>;
  }
  else if(props.page === 'word'){
    page = <Retrieval user={props.user} page={props.page} signout={props.signout}/>;
  }
  else if(props.page === 'other'){
    page = <Retrieval user={props.user} page={props.page} signout={props.signout}/>;
  }
  else if(props.page === 'dock-user'){
    page = <Retrieval user={props.user} page="dock" signout={props.signout}/>;
  }
  else if(props.page === 'privacy'){
    page = <Privacy user={props.user} signout={props.signout}/>; 
  }
  else if(props.page === 'help & feedback'){
    page = <Help user={props.user} signout={props.signout}/>; 
  }
  else if(props.page === 'share'){
    page = <Share user={props.user} signout={props.signout}/>;
  }

  else{
    page = <Dashboard user={props.user} signout={props.signout} />;
  }

  let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <AppBar style={{ background: "#fff", padding: "12px" }} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <LinkRouter to="/dashboard" style={{ width: '4%' }} className="logo2" >
          <img src={Logo}  />
          </LinkRouter>
          <Typography component="h1" variant="h6" style={{color: "black", textTransform: 'uppercase' }} noWrap className={classes.title}>
            {props.page}
          </Typography>
          <IconButton color="inherit">
          <AvatarPopUp signout={props.signout} user={props.user} />
            {/* <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} align='center'>
          <LinkRouter to="/dashboard" className="" style={{ width: "100%" }} >
        <img src={FreeTossLogoHorizontal} alt="logo" className={classes.logo} />
        </LinkRouter>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {/* <ListSubheader inset>Account</ListSubheader> */}
        <Divider />
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={props.user.displayName} />
    </ListItem>
    <Divider />

        {/* 
        <Typography align="left" variant="h5" style={{ padding: "20px"}}>{props.user.displayName}</Typography>
        <Divider /> */}
        <List>{mainListItems}</List>
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

            {page}

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
        
      </main>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(DashboardLayout);