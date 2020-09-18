import React from 'react'
import classes from './Tollbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle sideDrawerClicked={props.sideDrawerClicked} />
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
