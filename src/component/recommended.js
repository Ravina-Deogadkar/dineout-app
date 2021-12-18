
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
//import DineCard from './dinecard';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCadData } from "../store/action/dishDetail";
import Grid from "@material-ui/core/Grid";
import Dish from "./dishes/dish";
import Profile from './Profile';
import DishHOC from './dishes/dish';

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

class recommended extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			dishdata: [],
		}
	}
	handleExpandClick = () => {
		//  let obj = this.state;
		//  obj["expanded"] = !this.state.expanded;
		//   mthis.setState(obj);
	};

	componentDidMount() {
		this.props.getCadData_action();
	}
	render() {
		const { classes, dishdata } = this.props;
		const dishs=[];
		dishdata.map((value, index) => {
			let data=DishHOC(Profile, value)
			dishs.push(<Grid item xs={3} sm={3} lg={4} key={index}>
				{data}</Grid>);
		
		});
		console.log(dishs);
		
		return (
			<div>
				<Typography variant="h6" noWrap className={classes.ttl} >
					Recommended
                </Typography>
				<div className={classes.root}>

					<Grid container style={{ margin: "5%", maxWidth: '90%' }} spacing={5}>
						{dishdata.map((value, index) => (
							<Grid item xs={3} sm={3} lg={4} key={index}>
								{/* <DineCard dishdata={value}></DineCard> */}
								{DishHOC(Profile, value)}
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		)
	}
}
recommended.propTypes = {
	dishdata: PropTypes.array,
	getCadData_action: PropTypes.func
}
recommended.defaultProps = [
	{
		hotelid: 'H1',
		dishid: 1,
		dishname: 'Aloo Burger',
		image: '',
		category: "Snacks",
		type: "Veg",
		rating: 3,
		price: 50,
	}
]

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
)(withStyles(useStyles)(recommended));

