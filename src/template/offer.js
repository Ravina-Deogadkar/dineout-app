import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import OfferCard from '../component/offers/offerCard';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { getOfferData } from "../store/action/offerDetail";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";;

const useStyles = (theme) => ({
    
})
class Offer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOfferData_action()
    }

    render() {
        const { classes, offerdata } = this.props;
        console.table(offerdata);
        return (
            <div>
                <Typography variant="h6" noWrap>
                    Offers
          </Typography>
                <div>

                    <Grid container style={{ margin: "5%", maxWidth: '90%' }} spacing={5}>
                        {offerdata.map((value, index) => (
                            <Grid item xs={3} sm={5} lg={4} key={index}>
                                <OfferCard offerdata={value}></OfferCard>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        offerdata: state.offerdata,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOfferData_action: () => dispatch(getOfferData()),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(Offer))
