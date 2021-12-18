import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getCadData } from "../../store/action/dishDetail";
import { setHotelData } from "../../store/action/hotelDetail";
import { connect } from "react-redux";
import { Translate } from '@material-ui/icons';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

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
	
	ttl: {
		height: 48,
		padding: '0 30px',
	},
	paper: {
		position: 'absolute',
		width: 500,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[55],
		padding: theme.spacing(2, 4, 3),
		//marginRight: '-50%',
		//left:'35%',
		//transform:Translate('-50%','-50%')
		//top: '20%',
	},
	title:{
		textAlign: 'center',
	}
});

class MenuCard extends Component {
	render() {
		const hotel = this.props.hotel?.selectedHotel;
		const dishes = this.props?.dishdata;
		const menu = dishes.filter(dish => dish.hotelid == hotel?.hotelid);
		const { classes } = this.props;

		console.log('menuu' + menu)

		const menuData=[];
		for(let dish of menu){
			menuData.push(<>
				<Grid item xs={9}>
					{dish.dishname}
				</Grid>
				<Grid item xs={3}>
					{dish.price}
				</Grid>
			</>)
		}
		return (
			<div className={classes.paper} style={getModalStyle()}>
				<h2 className={classes.title}>{hotel?.hotelname}</h2>
				<h5 className={classes.title}>
					{"Approx " + hotel?.avgprice + " Rs for 2"}
				</h5>
				<Grid container spacing={3}>
				{menuData}
				</Grid>
					
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		dishdata: state.dishdata,
		hotel:state.hotel
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCadData_action: () => dispatch(getCadData()),
		setHotelData_action: (data) => dispatch(setHotelData(data))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(useStyles)(MenuCard));