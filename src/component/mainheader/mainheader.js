import React, {Component} from 'react';
import LogoNameHeader from './logoName';
import Search from './search';
import Logo from './logo';
class Mainheader extends Component{
    render(){
        return(
            <>
            <Logo />
            <LogoNameHeader />
            <Search />
            </>
        );
    }
}

export default Mainheader;