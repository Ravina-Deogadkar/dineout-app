import React,{Component} from 'react';
import Recommended from '../component/recommended';
import Nearby from '../component/hotels/nearby';
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
            <main>
            <Recommended></Recommended>
            <Nearby></Nearby>
            </main>
        );
    }
}

export default Home;