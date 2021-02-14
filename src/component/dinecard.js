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
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import NumberPicker from "react-number-picker";
import Button from '@material-ui/core/Button';
import { addToCart } from "../store/action/cartDetail";
import * as utils from "../utils/utils";
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

import "react-number-picker/dist/style.css"
const useStyles = (theme) => ({
	root: {
		maxWidth: 380,

	},
	fabProgress: {
		color: green[500],
		position: 'absolute',
		// top: -6,
		// left: -6,
		zIndex: 1,
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

class dinecard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
	}
	clickHandler = () => {
		//this.setState({ 'isLoading': true });
		this.setState({ isLoading: true},()=>{
			console.log('isLoading', this.state.isLoading)
		});

		const orderId = utils.generateOrderId();
		let dishid = this.props.dishdata?.dishid;
		let hotelid = this.props.dishdata?.hotelid;
		let price = this.props.cartDetail?.price + this.props.dishdata?.price;
		const cartData = {
			orderid: this.props.cartDetail?.orderId == null ? orderId : this.props.cartDetail?.orderId,
			hotelid: hotelid,
			offerid: 0,
			offerval: 0,
			paymentMode: '',
			price: price,
		};
		let newdish = [];
		this.props.cartDetail.dishes.map(dish => {
			console.log(dish)
			if (dish.dishid === dishid) {
				dish.quantity += 1;
				newdish.push(dish);
			}
			else {
				newdish.push({ 'dishid': dishid, 'quantity': 1 });
			}
		});
		cartData.dishes = newdish;
		this.props.addToCart_action(cartData);
		//console.log('orderId' + orderId);
		//console.log('this.props.cartDetail' + this.props.cartDetail);
		this.setState({ 'isLoading': false });

	}

	render() {
		const classes = this.props.classes;
		const caddata = this.props.dishdata;
		return (
			<Card className={classes.root}>
				<CardHeader
					title={caddata?.dishname}
					subheader={caddata?.type}
				/>
				<CardMedia
					className={classes.media}
					image={caddata?.image}
					title="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{caddata?.price} Rs
        </Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						
						<Button variant="contained" color="primary" onClick={this.clickHandler} disabled={this.state.isLoading}>
							{this.state.isLoading && <CircularProgress size={38} className={classes.fabProgress} />}

							Add to cart
      				</Button>
						{/* <NumberPicker
              value={this.state.value}
              onChange={this.handlecartChange()}
            />; */}
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

dinecard.propTypes = {
	dishdata: PropTypes.object
}

const mapStateToProps = (state) => {
	return {
		cartDetail: state.cartdata,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart_action: (cartData) => dispatch(addToCart(cartData)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(useStyles)(dinecard))
