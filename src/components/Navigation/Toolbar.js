import React from 'react'
import classes from './Tollbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar