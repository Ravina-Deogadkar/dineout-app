
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DineCard from './dinecard';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getCadData} from "../store/action/dishDetail";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import {fetchDishData} from "../utils/fetchAPI";


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
            expanded:false,
            dishdata:[],
        }
    }
    handleExpandClick = () => {
      //  let obj = this.state;
      //  obj["expanded"] = !this.state.expanded;
     //   mthis.setState(obj);
    };
    fetchDishData=()=>async()=>{
      const serverURL="http://localhost:8030";
      const url =  serverURL+"/dish";

      let data = await Axios.get(url);
      const adsDetails = [];
      console.log(data.data.dishdata);
      if (data.data.dishdata != undefined) {
          data.data.dishdata.map((value, index) => {
              if (index < 6) {
                  adsDetails[index] = value;
                  //adsDetails[index].image = serverURL + value.image;
              }
          });
          let statedata=this.state;
      statedata.dishdata=this.props.dishdata;
      this.setState(statedata);
      }
    }
    componentDidMount(){
      this.fetchDishData();

      this.props.getCadData_action(this.state.dishdata);
      
    }
    render() {
        const {classes,dishdata} = this.props;
        console.log("this.props");
        console.log(this.state.dishdata);
        return (
            <div>
                <Typography variant="h6" noWrap className={classes.ttl} >
                    Recommended
                </Typography>
                <div className={classes.root}>
                    
                    <Grid container style={{ margin: "auto" }} spacing={2}>
              {this.state.dishdata.map((value, index) => (
                <Grid item xs={3} sm={3} lg={4} key={index}>
                  <DineCard dishdata={value}></DineCard>
                </Grid>
              ))}
            </Grid>
                </div>   
            </div>
        )
    }
}
recommended.propTypes={
  dishdata: PropTypes.array,
  getCadData_action: PropTypes.func
}
recommended.defaultProps={
  dishdata:[
    {
      hotelid:'H1',
      dishid:1,
      dishname:'Aloo Burger',
      image:'',
      category:"Snacks",
      type:"Veg",
      rating:3,
      price:50,
    }
  ]
}
const mapStateToProps =(state)=>{
  return {dishdata:state.dishdata};
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

