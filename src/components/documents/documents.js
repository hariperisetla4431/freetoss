import React from 'react';
import Retrieval from './retrieve';
import {Link, withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';

import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DescriptionIcon from '@material-ui/icons/Description';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Documents(props) {

    return(
      <div style={{ margin: '30px' }}>
      
      <Typography variant="h5" gutterBottom style={{ margin: '50px' }}>
        Select Folder
      </Typography>      
      {/* <Typography component="div"><Box fontWeight="fontWeightBold" m={1}>
      Select folder
      </Box></Typography> */}

        <Link to="/documents-image/" style={{ textDecoration: 'none' }}>
        <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<ImageIcon />}
        component="span"
        >
          Image
        </Button>
</Link>

<Link to="/documents-pdf/" style={{ textDecoration: 'none' }}>
<Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<PictureAsPdfIcon />}
        component="span"
        >
          PDF
        </Button>
</Link>
        <Link to="/documents-word/" style={{ textDecoration: 'none' }}>
        <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<DescriptionIcon />}
        component="span"
        >
          Word
        </Button>
        </Link>
        <Link to="/documents-other/" style={{ textDecoration: 'none' }}>
        <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<AppsIcon />}
        component="span"
        >
          Other
        </Button>
        </Link>
        <Link to="/documents-dock/"style={{ textDecoration: 'none' }}>
        <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<AccountBoxIcon />}
        component="span"
        >
          Profile
        </Button>
        </Link>
    
      </div>

    )
  }

  export default withRouter(Documents);