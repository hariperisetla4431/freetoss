import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
        <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '2', background: '#407bff' }}
        startIcon={<VisibilityIcon />}
        component="span"
        // onClick={() => {
        //   window.location = this.state.download[index];
        //   <ViewFile />
        //   // window.open(this.state.download[index], '_blank')
        // }}
        onClick={handleClickOpen}
        >
          View
        </Button>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.name}
        </DialogTitle>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography> */}
          {
          props.folder === 'image' ?
          
            <img src={props.fileurl} style={{ width: '100%' }} /> : 

              props.folder === 'pdf' ?
              <embed src={props.fileurl} type="application/pdf"   height="700px" width="500"></embed> : props.folder === 'dock' ? 
                  <div>
                  
              {  `${props.name}`.substring(`${props.name}`.lastIndexOf('.') + 1).toLowerCase() === 'pdf' ? 
              <embed src={props.fileurl} type="application/pdf"   height="700px" width="500"></embed> :
              <img src={props.fileurl} style={{ width: '100%' }} />
            }

              </div>
              : <Typography gutterBottom>
                File cannot be displayed
              </Typography> 
          }
            
        </DialogContent>
        <DialogActions>
<a href={ `${props.fileurl}`} target="_blank" download={props.name} > 
          <Button autoFocus  color="primary">
            Download
          </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}