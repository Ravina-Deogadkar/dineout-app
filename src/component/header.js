import React, { Suspense,lazy } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ShopIcon from '@material-ui/icons/Shop';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useSelector} from "react-redux";

const Home = lazy(() => import('../template/home.js'));
const Offer = lazy(() => import('../template/offer.js'));
const Search = lazy(() => import('../template/searchtemp.js'));
const Profile = lazy(() => import('../template/profile.js'));
const MenuCard = lazy(() => import('../component/hotels/menucard'));

const axios = require('axios');

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	menuLabel: {
		fontSize: "16px",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	link: {
		textDecoration: "none",
		cursor: "default",
		color: "white",
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function Header() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const [address, setAddress] = React.useState({ addressType: "Home", addressValue: "Street no. XYZ" });
	const carts = useSelector(state => state.cartdata)

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	let addressData = null;

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	// const handleChange = (event) => {
	// 	setAddress({ 'Home': event.target.value });
	// }

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Order</MenuItem>
			<MenuItem onClick={handleMenuClose}>Favorite</MenuItem>
			<MenuItem onClick={handleMenuClose}>Address</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<Button>Offers</Button>
			</MenuItem>
			<MenuItem>
				<Button>Search</Button>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
	const fetchAddress = () => {
		if (addressData == null) {
			axios.get('http://localhost:8030/adds')
				.then(function (response) {
					// handle success
					addressData = response.data.address;
					console.log(response);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
		}
	}

	//console.log(addressData);
	return (
		<Router>
			<div className={classes.grow} >

				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
						>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title} variant="h6" noWrap>
							<Link to="/" className={classes.link}>
								Restro
            </Link>
						</Typography>
						<div className={classes.search}>

							<Typography className={classes.title} variant="h7" noWrap>
								{address.addressType}
							</Typography>
							<Typography className={classes.title} variant="h7" noWrap>
								{address.addressValue}
							</Typography>

							{/* <div className={classes.formControl}>
      {/* <InputLabel id="demo-simple-select-autowidth-label">Address</InputLabel> }
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={address.addressValue}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {addressData.forEach(element => {
          (<MenuItem value={element.addressType}>{element.addressValue[0]}</MenuItem>)
         // <MenuItem value={element.addressType}>{element.addressValue[1]}</MenuItem>
          })}}

        </Select>

      </div> */}

						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>

							<IconButton aria-label="show search" color="inherit">
								<Badge color="secondary">
									<SearchIcon />

								</Badge>
									<Link to="/search" className={classes.link}>
										<p className={classes.menuLabel}>
											Search
										</p>
									</Link>
							</IconButton>
							<IconButton aria-label="show 4 new offers" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<LocalOfferIcon />

								</Badge>
								
								<Link to="/offer" className={classes.link}>
									<p className={classes.menuLabel}>Offers
									</p>
								</Link>
							</IconButton>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
								<p className={classes.menuLabel}>User</p>
							</IconButton>
							<IconButton aria-label="show cart" color="inherit">
								<Badge badgeContent={carts?.dishes.length} color="secondary">
									<ShopIcon />

								</Badge>
								<p className={classes.menuLabel}>Cart</p>
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label="show more"
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								onClick={handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{/* {renderMobileMenu} */}
				{/* {renderMenu} */}
				<main className="maincontent" style={{ marginTop: "3%" }}>
					<React.Fragment>
						<Suspense fallback={<div></div>}>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/offer" component={Offer} />
								<Route path="/search" component={Search} />
								<Route path="/profile" component={Profile} />
								<Route path="/menucard" component={MenuCard} />
							</Switch>
						</Suspense>
					</React.Fragment>
				</main>
			</div>
		</Router>
	);
}