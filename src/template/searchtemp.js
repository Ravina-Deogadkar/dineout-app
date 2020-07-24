import React, { Component } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Search from '../component/search';
import Layout from '../component/layout';
import DineCard from '../component/dinecard';
import Header from '../component/header';
class Searchtemp extends Component {
    render() {
        return (

            <main>
                <Search></Search>
                <DineCard></DineCard>
            </main>
        )
    }
}
export default (Searchtemp)