import React,{Component} from 'react';
import Layout from '../component/layout';
import Recommended from '../component/recommended';
import Typography from '@material-ui/core/Typography';

//import { Component } from 'react';

class Home extends Component{
    constructor(props){
       super(props);
        // this.state={

        // };
    this.classes=this.useStyles();
    }

    useStyles(theme){

        return(
            {title: {
            display: 'block'
          }
        })
        
    };      
    offers=(
        <div>
            
        </div>
    )
    render(){
        return(<Layout>
            <Recommended></Recommended>
            
        </Layout>);
    }
}

export default Home;