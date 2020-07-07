import React, { Component } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';

const useStyles=(theme) => ({
    root: {
      maxWidth: 345,
      
    },
    ttl:{
        height: 48,
    padding: '0 30px',
    },
    margin: {
        margin: theme.spacing(1),
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
})
class Search extends Component {
    
    constructor(props){
        super(props);
        this.state={
           /// expanded:false
        }
    }

    render() {
        const classes = this.props.classes;
        console.log(this.props);
        return (
            <div>
                <Typography variant="h6" noWrap className={classes.ttl} >
                    Search
                </Typography>
                <div>
                <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Badge color="secondary">
                <SearchIcon />
                
              </Badge>
            </InputAdornment>
          ),
        }}
      />
                </div>   
            </div>
        )
    }
}
export default withStyles(useStyles)(Search)