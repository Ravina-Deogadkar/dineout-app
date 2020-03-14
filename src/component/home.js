import React,{Component} from 'react';
import Layout from './layout';
//import { Component } from 'react';

class Home extends Component{
    Home(){
       // super(props);
        // this.state={

        // };
    }
    recommended=(
        <div>
            <p>Recommended</p>
            <div></div>
        </div>
    );
    render(){
        return(<Layout>
            {this.recommended}
        </Layout>);
    }
}

export default Home;