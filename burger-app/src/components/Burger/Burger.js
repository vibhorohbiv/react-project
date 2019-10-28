import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredients'

const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients).map( IgKey => {
        return [...Array(props.ingredients[IgKey])].map((_,i) => {
            return <BurgerIngredient type={IgKey} key={IgKey+i}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[])

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please Start Adding ingredients!</p>
    }
    return(
        <div className="Burger">
            <BurgerIngredient type='bread-top'/>
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger