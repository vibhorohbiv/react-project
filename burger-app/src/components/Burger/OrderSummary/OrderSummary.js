import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) =>{ 
    const ingredientSummary = Object.keys(props.ingredients).map((igKey,index) => {
        return <li key={index}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })
    return(
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <p><strong>Total Price:  ${props.price.toFixed(2)}</strong></p>
            <Button btnType={'Danger'} clicked={props.cancel}>Cancel</Button>
            <Button btnType={'Success'} clicked={props.continue}>Continue</Button>
        </>
    )
} 

export default orderSummary