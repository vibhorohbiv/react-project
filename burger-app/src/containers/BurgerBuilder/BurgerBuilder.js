import React,{Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0,
    bacon: 2.0,
    meat: 10.0
}

export class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients : {
                salad: 0,
                cheese: 0,
                bacon: 0,
                meat: 0
            },
            totalPrice: 4.0
        }
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1 
        const upgradedIngredients = {
            ...this.state.ingredients
        } 
        upgradedIngredients[type] = updatedCount
        const priceAddition= INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const NewPrice = oldPrice + priceAddition
        this.setState({
            price: NewPrice,
            ingredients: upgradedIngredients
        })
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return
        }
        const updatedCount = oldCount - 1
        const upgradedIngredients = {
            ...this.state.ingredients
        }
        upgradedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const NewPrice = oldPrice - priceDeduction
        this.setState({
            price: NewPrice,
            ingredients: upgradedIngredients
        })
    }

    render(){
        const disabledInfo = { ...this.state.ingredients }
        for(var key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientDeducted={this.removeIngredientHandler} disabled={disabledInfo}/>
            </>
        )
    }
}