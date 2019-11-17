import React from 'react';
import './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return(    
        <>
            <Toolbar/>
            <main className="content">
                {props.children}
            </main>
        </>
    )
} 

export default layout;

