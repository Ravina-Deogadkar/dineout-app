import React,{Component} from 'react';
import Layout from './layout';
import Recommended from './recommended';
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
             <Typography variant="h6" noWrap>
            Offers
          </Typography>
            <div></div>
        </div>
    )
    render(){
        return(<Layout>
            <Recommended></Recommended>
        </Layout>);
    }
}

export default Home;