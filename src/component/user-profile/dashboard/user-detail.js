import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
class userDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {userinfo,classes}=this.props;
        return (
            <div>
                <Typography className={classes.title} variant="h5" noWrap>
                {userinfo.username}
                </Typography>
                <div>
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
export default userDetail
