import React,{Component} from 'react';
import Layout from '../component/layout';
import Recommended from '../component/recommended';
import Offer from '../component/offer';
import Typography from '@material-ui/core/Typography';

//import { Component } from 'react';

class Home extends Component{
    Home(){
       // super(props);
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
    // recommended=(
    //     <div>
    //         <Typography variant="h6" noWrap>
    //             Recommended
    //         </Typography>
    //         <div></div>
    //     </div>
    // );
    offers=(
        <div>
            
        </div>
    )
    render(){
        return(<Layout>
            <Recommended></Recommended>
            <Offer></Offer>
        </Layout>);
    }
}

export default Home;