import React, { Component } from 'react';
import MainHeader from '../mainheader/mainheader/mainheader';
import MainFooter from './../mainfooter/mainfooter';
import MainBody from './../body/mainbody'
class Schema extends Component{
    render(){return(
        <>
        <MainHeader />
        <MainBody />
        <MainFooter />     
        </>
    );
}
}

export default Schema;