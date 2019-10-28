import React from 'react';
import './layout.css'
const layout = (props) => {
    return(    
        <>
            <div>Toolbar, Sidedrawer, Backdrop </div>
            <main className="content">
                {props.children}
            </main>
        </>
    )
} 

export default layout;

