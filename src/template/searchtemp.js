import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCadData } from "../store/action/dishDetail";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Search from '../component/search';
import DineCard from '../component/dinecard';
import Grid from "@material-ui/core/Grid";;



class Searchtemp extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            dishdata: this.props.dishdata,
        }
    }
    searchHandler=(search)=>{
        console.log('search',search);
        let statdata=this.state.dishdata;
        let nstatdata=statdata.filter(item => item.dishname.toLowerCase().includes(search.toLowerCase()));
        this.setState({ 'dishdata': nstatdata});
    }

    filterDishData=()=>{
        
    }
    render() {
        const { classes, dishdata } = this.props;
        
        return (
            <main>
                <Search onSearch={this.searchHandler}></Search>
                <div>
                {this.state.dishdata.length>0?(
                <Grid container style={{ margin: "5%", maxWidth: '90%' }} spacing={5}>
                    {this.state.dishdata.map((value, index) => (
                        <Grid item xs={3} sm={3} lg={4} key={index}>
                            <DineCard dishdata={value}></DineCard>
                        </Grid>
                    ))}
                </Grid>
                ):<p>No data found</p>}
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dishdata: state.dishdata,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCadData_action: () => dispatch(getCadData()),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Searchtemp)