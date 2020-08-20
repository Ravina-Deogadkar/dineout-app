
import React, { Component } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DineCard from './dinecard';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getCadData} from "../store/action/cadDetail";

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
    handleExpandClick = () => {
      //  let obj = this.state;
      //  obj["expanded"] = !this.state.expanded;
     //   this.setState(obj);
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
                    <DineCard caddata={this.props.caddata}></DineCard>
                </div>   
            </div>
        )
    }
}
recommended.propTypes={
  caddata: PropTypes.array,
  getCadData_action: PropTypes.func
}
recommended.defaultProps={
  caddata:[
    {
      hotel:'A',
      dishid:1,
      dishname:'Burger',
      image:'',
      category:"Veg",
      prize:90,
    }
  ]
}
const mapStateToProps =(state)=>{
  return {caddata:state.caddata};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCadData_action: (data) => dispatch(getCadData(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(recommended));

