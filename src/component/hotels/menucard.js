import React from 'react'
import { useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';

export default function MenuCard() {
	const menu = useSelector(state => state.hotel.selectedHotel);
	return (
		<div>
			<h2>{menu?.hotelname}</h2>
			<Typography variant="body2" color="textSecondary" component="p">
				{menu?.avgprice}
			</Typography>
		</div>
	)
}
