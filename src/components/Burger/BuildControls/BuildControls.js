import React from 'react'

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p><strong>Total Price: {props.price}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.removedIngredient(ctrl.type)}
                disabledInfo={props.disabledinfo[ctrl.type]}/>
            })}
            <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
