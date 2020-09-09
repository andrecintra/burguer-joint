import React, { Component } from 'react';

import PageAux from '../../hoc/PageAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatedPurchasableState = (ingredients) => {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el
        }, 0)

        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENTS_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatedPurchasableState(updatedIngredients);
    }


    removeIngredientsHandler = (type) => {

        const oldCount = this.state.ingredients[type]

        if(oldCount <= 0){
            return;
        }

        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENTS_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatedPurchasableState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert("You continued")
    }

    render () {
        const disabledStateIngredients = {...this.state.ingredients}

        for (let key in disabledStateIngredients) {
            disabledStateIngredients[key] = disabledStateIngredients[key] <= 0
        }

        return (
             <PageAux>
                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                     <OrderSummary ingredients={this.state.ingredients} 
                        purchasedCanceled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}/>
                    </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls  
                ingredientAdded={this.addIngredientHandler} 
                removedIngredient={this.removeIngredientsHandler}
                disabledinfo={disabledStateIngredients}
                price={this.state.totalPrice.toFixed(2)}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
            </PageAux>
        );
    }
}

export default BurgerBuilder;