import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
	
	ttl: {
		height: 48,
		padding: '0 30px',
	},
	margin: {
		margin: theme.spacing(1),
	},
	
})
class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: '',
		}
	}

	changeHandler = (event) => {
		this.setState({ search: event.target.value})
	}
	clickHandler=()=>{
		const { onSearch } = this.props;
		onSearch(this.state.search);
	}
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Typography variant="h6" noWrap className={classes.ttl} >
					Search Dish
                </Typography>
				<div>
					<TextField
						className={classes.margin}
						id="input-with-icon-textfield"
						label=""
						onChange={this.changeHandler}
					/>
					<Button variant="contained" color="primary" onClick={this.clickHandler}>
						Search
      				</Button>
				</div>
			</div>
		)
	}
}
export default withStyles(useStyles)(Search)