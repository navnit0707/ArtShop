import React, {Component} from 'react';
import './mainheader.css'
import LogoNameHeader from '../logoname/logoName';
import Search from '../search/search';
import Logo from '../logo/logo';
class MainHeader extends Component{
    render(){
        return(
            <>
            <div className='item'>
            <Logo />
            <LogoNameHeader />
            <Search />
            </div>
            </>
        );
    }
}

export default MainHeader;