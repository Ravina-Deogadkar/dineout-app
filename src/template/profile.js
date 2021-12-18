import React, { Component } from 'react';
import userDetail from '../component/user-profile/dashboard/user-detail'
import HOC from '../component/HOC';
import Profile from '../component/Profile';


const profileData={
    
}
export default class profile extends Component {
    render() {
        return (
            <div>
                <userDetail></userDetail>
            </div>
        )
    }
}

const ProfileTemplate=HOC(Profile, )
