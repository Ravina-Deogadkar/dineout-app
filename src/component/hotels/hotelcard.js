import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { getCadData } from "../../store/action/dishDetail";
import { setHotelData } from "../../store/action/hotelDetail";
import { connect } from "react-redux";

const useStyles = (theme) => ({
	root: {
		maxWidth: 380,

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
	ttl: {
		height: 48,
		padding: '0 30px',
	}
});

class HotelCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	handleExpandClick = () => {
		// let obj = this.state;
		// obj["expanded"] = !this.state.expanded;
		// this.setState(obj);
	};
	clickHandler = () => {
		let hotel = this.props.hotel;
		hotel.menu = this.props.dishdata.filter(dish => dish.hotelid === this.props.hotel.hotelid);
		this.props.setHotelData_action({'selectedHotel':hotel})
		console.log("dishesjjjj", hotel);
		window.location.replace("http://localhost:3000/menucard")
	}

	render() {
		const { classes, hotel} = this.props; 

		return (
			<Card className={classes.root}>
				<CardHeader
					title={hotel?.hotelname}
					subheader={hotel?.type}
				/>
				<CardMedia
					className={classes.media}
					image={hotel?.image}
					title="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{hotel?.avgprice}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<Button variant="contained" color="primary" onClick={this.clickHandler}>
							View menu
      				</Button>
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
				</CardActions>
			</Card>

		)
	}
}

HotelCard.propTypes = {
	hotel: PropTypes.object
}
const mapStateToProps = (state) => {
	return {
		dishdata: state.dishdata,
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
)(withStyles(useStyles)(HotelCard));
