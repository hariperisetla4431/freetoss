import React, {Component } from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

  import EmailIcon from '@material-ui/icons/Email';
  import FacebookIcon from '@material-ui/icons/Facebook';
  import { IconButton, Input } from '@material-ui/core';
  import WhatsAppIcon from '@material-ui/icons/WhatsApp';
  import Button from '@material-ui/core/Button';
import CopyLink from './copyLink';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

  import {withRouter} from 'react-router-dom'

  class Share extends Component {
    render(props) {
      const shareUrl = 'https://freetoss8.web.app/' + `${this.props.user.uid}` + '/' + 'dock';
      const shareApp = 'https://freetoss8.web.app/';
      const title = 'FreeToss8';
  

    return(
        <div>
            <h1> Share your Dock! </h1>
            <IconButton style={{ color: '#D44638' }} component="span" >
            <EmailShareButton url={shareUrl} >
                <EmailIcon style={{ fontSize: "50px", background: '' }} />
            </EmailShareButton>
            
            </IconButton>

            <IconButton style={{ color: '#3B5998' }} component="span" >
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon style={{ fontSize: "50px" }} />
            </FacebookShareButton>
            </IconButton>

            <IconButton style={{ color: '#128C73' }} component="span" >
            <WhatsappShareButton url={shareUrl}>
                <WhatsAppIcon style={{ fontSize: "50px" }} />
            </WhatsappShareButton>
            </IconButton>

            <IconButton style={{ color: '#0077B5' }} component="span" >
            <LinkedinShareButton url={shareUrl}>
                <LinkedInIcon style={{ fontSize: "50px" }} />
            </LinkedinShareButton>
            </IconButton>

            <IconButton style={{ color: '#08A0E9' }} component="span" >
            <TwitterShareButton url={shareUrl}>
                <TwitterIcon style={{ fontSize: "50px" }} />
            </TwitterShareButton>
            </IconButton>

        <CopyLink shareUrl={shareUrl} />

            {/* <Button onClick={() => {navigator.clipboard.writeText(shareUrl)}}>Copy Link</Button> */}
<br />
<br />
<br />
<h1> Share the App if you love it!  </h1>
            <IconButton style={{ color: '#D44638' }} component="span" >
            <EmailShareButton url={shareApp} >
                <EmailIcon style={{ fontSize: "50px", background: '' }} />
            </EmailShareButton>
            
            </IconButton>

            <IconButton style={{ color: '#3B5998' }} component="span" >
            <FacebookShareButton url={shareApp}>
                <FacebookIcon style={{ fontSize: "50px" }} />
            </FacebookShareButton>
            </IconButton>

            <IconButton style={{ color: '#128C73' }} component="span" >
            <WhatsappShareButton url={shareApp}>
                <WhatsAppIcon style={{ fontSize: "50px" }} />
            </WhatsappShareButton>
            </IconButton>

            <IconButton style={{ color: '#0077B5' }} component="span" >
            <LinkedinShareButton url={shareApp}>
                <LinkedInIcon style={{ fontSize: "50px" }} />
            </LinkedinShareButton>
            </IconButton>

            <IconButton style={{ color: '#08A0E9' }} component="span" >
            <TwitterShareButton url={shareApp}>
                <TwitterIcon style={{ fontSize: "50px" }} />
            </TwitterShareButton>
            </IconButton>

        <CopyLink shareUrl={shareApp} />
          <div>
          </div>
        </div>
 
    )
}
  }

  export default withRouter(Share);