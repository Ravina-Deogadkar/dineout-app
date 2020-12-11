
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import HotelCard from './hotelcard';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHotelData } from "../../store/action/hotelDetail";
import Grid from "@material-ui/core/Grid";;


const useStyles = (theme) => ({
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
	ttl: {
		height: 48,
		padding: '0 30px',
	}
});

class Nearby extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			dishdata: [],
		}
	}

	componentDidMount() {
		this.props.getHotelData_action();
	}
	render() {
		const { classes, hoteldata } = this.props;

		return (
			<div>
				<Typography variant="h6" noWrap className={classes.ttl} >
					Near by
                </Typography>
				<div className={classes.root}>

					<Grid container style={{ margin: "5%", maxWidth: '90%' }} spacing={5}>
						{hoteldata.map((value, index) => (
							<Grid item xs={3} sm={3} lg={4} key={index}>
								<HotelCard hoteldata={value}></HotelCard>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		)
	}
}
Nearby.propTypes = {
	hoteldata: PropTypes.array,
	getHotelData_action: PropTypes.func
}

const mapStateToProps = (state) => {
	return {
		hoteldata: state.hoteldata,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getHotelData_action: () => dispatch(getHotelData()),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(useStyles)(Nearby));

