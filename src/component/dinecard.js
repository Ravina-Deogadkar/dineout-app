import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles=(theme) => ({
    root: {
      maxWidth: 345,
      
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
    ttl:{
        height: 48,
    padding: '0 30px',
    }
  });

class dinecard extends Component {
    constructor(props){
        super(props);
        this.state={
          dishdata:
            {
            hotelid:'',
            dishid:1,
            dishname:'Aloo Burger',
            image:'',
            category:"Snacks",
            type:"Veg",
            rating:3,
            price:50,
          }
        
        }
    }
  //const [expanded, setExpanded] = React.useState(false);
    
    handleExpandClick = () => {
        // let obj = this.state;
        // obj["expanded"] = !this.state.expanded;
        // this.setState(obj);
    };

    render() {
        const classes = this.props.classes;const caddata = this.props.dishdata;
        console.log('caddata');
        console.log(caddata);
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
          {caddata?.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {caddata?.category}
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

dinecard.propTypes={
  dishdata:PropTypes.object
}

export default withStyles(useStyles)(dinecard)
