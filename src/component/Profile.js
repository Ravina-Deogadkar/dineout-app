import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
class Profile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {profileData,classes,children} = this.props;
		return (
			<Card className={classes.root}>
				<CardHeader
					title={profileData?.dishname}
					subheader={profileData?.type}
				/>
				<CardMedia
					className={profileData.media}
					image={profileData?.image}
					title="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{profileData?.price} Rs
        			</Typography>
					{children}
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
				</CardActions>
			</Card>
		);
	}

}

export default Profile;