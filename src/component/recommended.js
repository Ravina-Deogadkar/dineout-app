
import React, { Component } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DineCard from './dinecard';

const useStyles=(theme) => ({
    root: {
      maxWidth: 345,
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    ttl:{
        height: 48,
    padding: '0 30px',
    }
  });

class recommended extends Component {
    
    constructor(props){
        super(props);
        this.state={
            expanded:false
        }
    }
  //const [expanded, setExpanded] = React.useState(false);
    
    handleExpandClick = () => {
        let obj = this.state;
        obj["expanded"] = !this.state.expanded;
        this.setState(obj);
    };
    render() {
        const classes = this.props.classes;
        console.log(this.props);
        return (
            <div>
                <Typography variant="h6" noWrap className={classes.ttl} >
                    Recommended
                </Typography>
                <div>
                    <DineCard></DineCard>
                </div>   
            </div>
        )
    }
}

export default withStyles(useStyles)(recommended)

