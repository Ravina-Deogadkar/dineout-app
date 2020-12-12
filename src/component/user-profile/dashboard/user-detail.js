import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles=(theme) => ({
    detail: {
      
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
});
class userDetail extends Component {
    
    render() {
        const {userinfo,classes}=this.props;
        return (
            <div>
                <Typography className={classes.title} variant="h5" noWrap>
                {userinfo.username}
                </Typography>
                <div className={classes.detail}>
                <Typography className={classes.title} variant="h7" noWrap>
                {userinfo.mobileno}
                </Typography>
                <Typography className={classes.title} variant="h7" noWrap>
                {userinfo.emailid}
                </Typography>
                </div>
            </div>
        )
    }
}
export default withStyles(useStyles)(userDetail)
