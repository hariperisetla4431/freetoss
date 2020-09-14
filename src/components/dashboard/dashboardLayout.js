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

import { withRouter } from 'react-router-dom';

import MyFiles from '../../img/my-files-01.png'
import FreeTossLogo from '../../img/freetoss logo.svg';
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
import FileRetrieval from '../fileRetrive/fileRetrieval';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import PersonIcon from '@material-ui/icons/Person';

import Test from '../home/Test'
import Documents from '../documents';

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

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 50, // keep right padding when drawer closed
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
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  let page;
  if(props.page === 'help'){
    page = <Test />;             
  }
  else if(props.page === 'documents'){
    page = <Documents />;
  }

  else{
    page = <Dashboard user={props.user} signout={props.signout} test={props.test} />;

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

          <Typography component="h1" variant="h6" style={{color: "black"}} noWrap className={classes.title}>
            Dashboard
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
        <img src={FreeTossLogoHorizontal} alt="logo" className={classes.logo} />
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
          <Grid container spacing={3}>
              
              {/* {
                props.page === 'help' ? <Test /> :
                
                <Dashboard user={props.user} signout={props.signout} test={props.test} />
                
              }
               
              {
                props.page === 'documents' ? <Documents /> :
                <Dashboard user={props.user} signout={props.signout} test={props.test} />
              } */}
            

            {page}

            
                          
                                      

              {/* <Grid item xs={12} md={8} lg={9}>
                  
                      <Dashboard user={props.user} signout={props.signout} />
                  
              </Grid> */}
            {/* Chart */}
            
            {/* Recent Deposits */}
            
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}> */}
                {/* <Orders /> */}
              {/* </Paper>
            </Grid> */}
          </Grid>
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