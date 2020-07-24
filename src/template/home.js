import React,{Component} from 'react';
import Recommended from '../component/recommended';

class Home extends Component{
    constructor(props){
       super(props);
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
        return(
            <Recommended></Recommended>
            
        );
    }
}

export default Home;