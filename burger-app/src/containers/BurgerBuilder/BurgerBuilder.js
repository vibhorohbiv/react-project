import React,{Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
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
            totalPrice: 4.0,
            purchaseable: false,
            purchasing: false
        }
    }

    updatePurchaseState = (ingredients) =>{
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({
            purchaseable: sum > 0
        })
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
            totalPrice: NewPrice,
            ingredients: upgradedIngredients
        })
        this.updatePurchaseState(upgradedIngredients)
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
            totalPrice: NewPrice,
            ingredients: upgradedIngredients
        })
        this.updatePurchaseState(upgradedIngredients)
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        alert('You Continues')
    }

    render(){
        const disabledInfo = { ...this.state.ingredients }
        for(var key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <>
                <Backdrop show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <Modal show={this.state.purchasing}><OrderSummary ingredients={this.state.ingredients} cancel={this.purchaseCancelHandler} continue={this.purchaseContinueHandler} price={this.state.totalPrice}/></Modal>
                </Backdrop>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientDeducted={this.removeIngredientHandler} disabled={disabledInfo} price={this.state.totalPrice} purchaseable={this.state.purchaseable} purchaseHandler={this.purchaseHandler}/>
            </>
        )
    }
}