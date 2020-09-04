import React, { Component } from 'react';

import PageAux from '../../hoc/PageAux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (
             <PageAux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </PageAux>
        );
    }
}

export default BurgerBuilder;