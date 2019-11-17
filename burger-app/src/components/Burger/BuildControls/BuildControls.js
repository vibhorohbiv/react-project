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
            <p>Curent Price: <strong>${props.price.toFixed(2)}</strong></p>
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
            <button className='OrderButton' disabled={!props.purchaseable} onClick={props.purchaseHandler}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;