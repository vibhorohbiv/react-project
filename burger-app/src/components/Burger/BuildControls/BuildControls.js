import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'},
]
const BuildControls = (props) => {
    return(
        <div className='BuildControls'>
            {
                controls.map(el => {
                    return <BuildControl key={el.label}
                                label={el.label} 
                                added={() => props.ingredientAdded(el.type)} 
                                subtract={() => props.ingredientDeducted(el.type)}
                                disabled ={props.disabled[el.type]}
                            />
                })
            }
        </div>
    )
}

export default BuildControls;