import React from 'react';
import './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
const layout = (props) => {
    return(    
        <>
            <Toolbar/>
            <SideDrawer/>
            <main className="content">
                {props.children}
            </main>
        </>
    )
} 

export default layout;

