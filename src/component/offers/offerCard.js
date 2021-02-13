import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as utils from "../../utils/utils";
import Button from '@material-ui/core/Button';

import "react-number-picker/dist/style.css"
const useStyles = (theme) => ({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},

	pos: {
		marginBottom: 12,
	},
});

class offerCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
	}
	clickHandler = () => {
		//this.setState({ 'isLoading': true });
		this.setState({ isLoading: true }, () => {
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
		const caddata = this.props?.offerdata;

		return (
			<Card className={classes.root}>


				<CardContent>

					<Typography variant="h5" component="h2" style={{ color: '#3f51b5' }}>
						{caddata?.title}

					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						{caddata?.desc}
					</Typography>

					<Button variant="contained" disabled>
						Use code <span style={{ fontWeight: 'bold', color: '#3f51b5' }}>{': ' + caddata?.code}</span>
					</Button>

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

offerCard.propTypes = {
	offerData: PropTypes.object
}

const mapStateToProps = (state) => {
	return {
		//	offerdata: state.offerdata,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		//	getOfferData_action: () => dispatch(getOfferData()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(useStyles)(offerCard))
