import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import DineCard from '../component/dinecard';
import { makeStyles,withStyles } from '@material-ui/core/styles';

const useStyles=(theme) => ({
    root: {
      maxWidth: 345,
      
    },
    ttl:{
        height: 48,
    padding: '0 30px',
    }
})
class Offer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <Typography variant="h6" noWrap>
            Offers
          </Typography>
            <div>
            {/* <DineCard></DineCard> */}
            </div>
            </div>
        )
    }
}
export default withStyles(useStyles)(Offer)
