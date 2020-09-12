import React from 'react'
import burguerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burguerLogo} alt="MyBurguer"/>
        </div>
    )
}

export default Logo
