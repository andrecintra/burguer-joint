import React from 'react'
import PageAux from '../../../hoc/PageAux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map(igKey => {
        return (
            <li ley={igKey}>
                <span style={{ 'textTransform': 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
    })
    return (
        <PageAux>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following indredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to Checkout</p>
            <Button clicked={props.purchasedCanceled} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">Continue</Button>
        </PageAux>
    )
}

export default OrderSummary
