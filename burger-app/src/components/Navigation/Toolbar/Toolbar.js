import React, {Component} from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

class toolbar extends Component{

    render(){
        return(
            <header className='Toolbar'>
                <div>Menu</div>
                <div className='Logo'>
                <Logo></Logo>
                </div>
                <nav><NavigationItems/></nav>
            </header>
        )
    }

}

export default toolbar