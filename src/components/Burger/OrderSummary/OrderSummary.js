import React, { Component } from 'react'
import PageAux from '../../../hoc/PageAux/PageAux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    render () {

        const ingredients = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ 'textTransform': 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
        })

        return (
            <PageAux>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following indredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout</p>
            <Button clicked={this.props.purchasedCanceled} btnType="Danger">Cancel</Button>
            <Button clicked={this.props.purchaseContinue} btnType="Success">Continue</Button>
        </PageAux>
        )
    }
}

export default OrderSummary
